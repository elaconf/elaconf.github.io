var test = require('tape');
var fs = require('fs');
var path =  require('path');
var jsyaml = require('js-yaml');

var posts = []
var agenda = []
fs.readdirSync('agenda/_posts/').forEach(function(i) {
  agenda.push('agenda/_posts/' + i);
  posts.push('agenda/_posts/' + i);
});

var organizers = []
fs.readdirSync('organizers/_posts/').forEach(function(i) {
  organizers.push('organizers/_posts/' + i);
  posts.push('organizers/_posts/' + i);
});

var speakers = []
fs.readdirSync('speakers/_posts/').forEach(function(i) {
  speakers.push('speakers/_posts/' + i);
  posts.push('speakers/_posts/' + i);
});


// build array of permalinks
var permalinks = posts.reduce(function(prev, post, index, list) {
  var permalink;
  
  if (post) {
    
    var file = readPost(post);
    var metadata = file.metadata;
    if (metadata.permalink) {
      permalink = metadata.permalink;
    } else {
      permalink = post.replace('_posts','').replace('.md','/').replace(/[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]-/,'').replace('//','/');
    }
    
    if (!prev[permalink]) { prev[permalink] = []; }
    prev[permalink].push(permalink);
  }
  
  return prev;
}, {});

// read data
var data = {
  sponsors: readData('_data/', 'sponsors.yml')
};

// build array of sponsors
var sponsors = data.sponsors.metadata.map(function(post) {
  return post.name;
});


function getDir(srcpath) {
  return fs.readdirSync(srcpath).filter(function(file) {
    return fs.statSync(path.join(srcpath, file)).isDirectory();
  });
}

function readPost(filename) {
  var buffer = fs.readFileSync(filename),
  file = buffer.toString('utf8');
  
  try {
    var parts = file.split(/---\s*[\n^]/),
    frontmatter = parts[1];
    
    return {
      name: filename,
      file: file,
      metadata: jsyaml.load(frontmatter),
      content: parts[2]
    };
  } catch(err) {
    console.log("\nCould not read metadata, check the syntax of the metadata and front matter in " + filename);
  }
}

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


agenda.forEach(function(post) {
  var file = readPost(post);
  
  var metadata = file.metadata;
  var content = file.content;
  
  test(post, function(t) {
    
    t.ok(metadata.title,"post must have a title");
    
    if (!metadata.permalink) {
      var permalink = post.replace('_posts','').replace('.md','/').replace(/[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]-/,'').replace('//','/');
    } else {
      var permalink = metadata.permalink;
    }
    
    t.equal(permalinks[permalink].length, 1, 'permalink must not already exist ' + permalink);
    
    t.end();
  });
  
});


organizers.forEach(function(post) {
  var file = readPost(post);
  
  var metadata = file.metadata;
  var content = file.content;
  
  test(post, function(t) {
    
    t.ok(metadata.title,"post must have a title");
    t.ok(metadata.image,"post must have a image");
    t.ok(metadata.twitter,"post must have a twitter");
    
    if (!metadata.permalink) {
      var permalink = post.replace('_posts','').replace('.md','/').replace(/[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]-/,'').replace('//','/');
    } else {
      var permalink = metadata.permalink;
    }
    
    t.equal(permalinks[permalink].length, 1, 'permalink must not already exist ' + permalink);
    
    t.end();
  });
  
});

speakers.forEach(function(post) {
  var file = readPost(post);
  
  var metadata = file.metadata;
  var content = file.content;
  
  test(post, function(t) {
    
    t.ok(metadata.title,"post must have a title");
    t.ok(metadata.image,"post must have a image");
    
    if (metadata.instagram) t.ok(metadata.instagram,"post can have an instagram");
    else t.ok(metadata.twitter,"post must have a twitter");
    
    if (!metadata.permalink) {
      var permalink = post.replace('_posts','').replace('.md','/').replace(/[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]-/,'').replace('//','/');
    } else {
      var permalink = metadata.permalink;
    }
    
    t.equal(permalinks[permalink].length, 1, 'permalink must not already exist ' + permalink);
    
    t.end();
  });
  
});


data.sponsors.metadata.forEach(function(post) {
  
  test(post.name, function(t) {
    
    t.equal( typeof post, 'object', 'sponsor must be formatted correctly');
    
    t.ok(post.name,'sponsor must have a \'name\'');
    t.ok(post.image,'sponsor must have an \'image\'');
    t.ok(post.site,'sponsor must have a \'site\'');
    //t.ok(post.type,'sponsor must have a \'type\'');
    t.ok(post.twitter,'sponsor must have a \'twitter\'');
        
    t.end();
  });
});
