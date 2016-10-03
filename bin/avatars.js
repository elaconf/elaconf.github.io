#!/usr/bin/env node

// Require dependencies
var fs = require('fs'),
request = require('request'),
jsyaml = require('js-yaml'),
path =  require('path');
var slugify = require('slugify')


var data = {
  volunteers: readData('_data/', 'volunteers.yml')
};

var volunteers = data.volunteers.metadata;

var paths = {
  speakers: '_speakers/',
  organizers: '_organizers/'
};


////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
// ORGANIZERS
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

var organizerPath = getFiles(paths['organizers']);
var organizerPages = []
organizerPath.forEach(function(name) {
  organizerPages.push( paths['organizers'] + name);
})

organizerPages.forEach(function(post) {
  var file = readPost(post);
  var metadata = file.metadata;
  var content = file.content;
  
  var name = slugify(metadata.title).toLowerCase().replace('.','').replace('\'','-') + '.png';
  var file = 'https://avatars.io/twitter/' + metadata.twitter;
  
  if (!metadata.image) {
    
    var download = function(uri, filename, callback) {
      request.head(uri, function(err, res, body) {
        request(uri).pipe(fs.createWriteStream('images/organizers/' + filename)).on('close', callback);
      });
    };
    
    download(file, name, function() {});
    
  }
  
});


////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
// SPEAKERS
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

var speakerPath = getFiles(paths['speakers']);
var speakerPages = []
speakerPath.forEach(function(name) {
  speakerPages.push( paths['speakers'] + name);
})

speakerPages.forEach(function(post) {
  var file = readPost(post);
  var metadata = file.metadata;
  var content = file.content;
  
  var socials = ['facebook','twitter','instagram','gravatar'];
  
  var name = slugify(metadata.title).toLowerCase().replace('.','').replace('\'','-') + '.png';
  
  // social site must match
  if (socials.indexOf(metadata.social) > -1) {
    
    var file = 'https://avatars.io/'+metadata.social+'/' + metadata.handle;
    
    if (!metadata.image) {
      
      var download = function(uri, filename, callback) {
        request.head(uri, function(err, res, body) {
          request(uri).pipe(fs.createWriteStream('images/speakers/' + filename)).on('close', callback);
        });
      };
      
      download(file, name, function(){});
    }
  }
  
});


////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
// VOLUNTEERS
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

volunteers.forEach(function(file) {
  var name = slugify(file.name).toLowerCase().replace('.','').replace('\'','-') + '.png';
  var file = 'https://avatars.io/'+file.social+'/' + file.handle;
  
  if (!file.image) {
    
    var download = function(uri, filename, callback) {
      request.head(uri, function(err, res, body) {
        request(uri).pipe(fs.createWriteStream('images/volunteers/' + filename)).on('close', callback);
      });
    };
    
    download(file, name, function(){});
  }
})

////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

function readData(dir, filename) {
  var buffer = fs.readFileSync(dir + filename),
  file = buffer.toString('utf8');
  
  try {
    
    return {
      name: filename,
      file: file,
      metadata: jsyaml.load(file)
    };
  } catch(err) {}
}

function getFiles(srcpath) {
  return fs.readdirSync(srcpath).filter(function(file) {
    return fs.statSync(path.join(srcpath, file))
  });
}

function readPost(filename) {
  var buffer = fs.readFileSync(filename),
  file = buffer.toString('utf8');
  
  try {
    var parts = file.split(/---\s*[\n^]/),
    frontmatter = parts[1];
    
    // first line must equal "---"
    if (file.split(/\n/)[0] != '---') {
      console.log('The first line of ' + filename + ' must be: ---');
    }
    
    // duplicate tags break js-yaml
    var tagCounts = frontmatter.split('\n').reduce(function(prev, cur) {
      var m = cur.match(/^(\w+):.*$/);
      if (m !== null) {
        if (!prev[m[1]]) prev[m[1]] = 1;
        else prev[m[1]] += 1;
      }
      return prev;
    }, {});
    Object.keys(tagCounts).forEach(function(k) {
      if (tagCounts[k] > 1) {
        console.log('Duplicate frontmatter tags in %s (\'%s\' appears %d times)', filename, k, tagCounts[k]);
      }
    });
    
    return {
      name: filename,
      file: file,
      metadata: jsyaml.safeLoad(frontmatter),
      content: parts[2]
    };
  } catch(err) {
    console.log('\nCould not read metadata, check the syntax of the metadata and front matter: ' + filename);
  }
}
