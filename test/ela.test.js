var test = require('tape');
var fs = require('fs');
var path =  require('path');
var jsyaml = require('js-yaml');

var posts = [];
var organizers = [];
fs.readdirSync('_organizers/').forEach(function(i) {
  if ( i != 'index.md' && i != 'index.html') {
    organizers.push('_organizers/' + i);
    posts.push('_organizers/' + i);
  }
});

var organizersImg = [];
fs.readdirSync('images/organizers/').forEach(function(i) {
  organizersImg.push(i);
});

var speakers = [];
fs.readdirSync('_speakers/').forEach(function(i) {
  speakers.push('_speakers/' + i);
  posts.push('_speakers/' + i);
});

var speakersImg = [];
fs.readdirSync('images/speakers/').forEach(function(i) {
  speakersImg.push(i);
});

/*
var agenda = [];
fs.readdirSync('_agenda/').forEach(function(i) {
  agenda.push('_agenda/' + i);
  posts.push('_agenda/' + i);
});
*/
/*

var volunteersImg = [];
fs.readdirSync('images/volunteers/').forEach(function(i) {
  volunteersImg.push(i);
});
*/

var sponsorImg = [];
fs.readdirSync('_includes/sponsors/').forEach(function(i) {
  sponsorImg.push(i);
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
  sponsors: readData('_data/', 'sponsors.yml'),
  levels: readData('_data/', 'levels.yml')
  //volunteers: readData('_data/', 'volunteers.yml'),
  //places: readData('_data/', 'places.yml')
};
/*
// build array of places
var places = data.volunteers.metadata.map(function(post) {
  return post.title;
});
*/
/*
// build array of volunteers
var volunteers = data.volunteers.metadata.map(function(post) {
  return post.name;
});
*/
// build array of sponsors
var sponsors = data.sponsors.metadata.map(function(post) {
  return post.name;
});
// build array of levels
var levels = data.levels.metadata;

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


function isLongitude(value) {
  if (value >= -180 && value <= 180) {
    return true;
  }
}

function isLatitude(value) {
  if (value >= -90 && value <= 90) {
    return true;
  }
}


organizers.forEach(function(post) {
  var file = readPost(post);

  var metadata = file.metadata;
  var content = file.content;

  test(post, function(t) {

    t.ok(metadata.title,"post must have a title");
    t.ok(metadata.image,"post must have a image");
    t.notEqual(organizersImg.indexOf(metadata.image), -1, metadata.image + ' must exist in images/organizers/ folder');
    t.ok(metadata.order,"post must have an order");
    t.equal(typeof metadata.order, "number","order must be a number");
    t.ok(metadata.handle,"post must have a handle");
    t.ok(metadata.social,"post must have a social");

    t.end();
  });

});

/*
agenda.forEach(function(post) {
  var file = readPost(post);

  var metadata = file.metadata;
  var content = file.content;

  test(post, function(t) {

    t.ok(metadata.title,"post must have a title");

    var permalink;
    if (!metadata.permalink) {
      permalink = post.replace('.md','/').replace(/[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]-/,'').replace('//','/');
    } else {
      permalink = metadata.permalink;
    }

    t.equal(permalinks[permalink].length, 1, 'permalink must not already exist ' + permalink);

    t.end();
  });

});
*/


speakers.forEach(function(post) {
  var file = readPost(post);

  var metadata = file.metadata;
  var content = file.content;

  test(post, function(t) {

    t.ok(metadata.title,"post must have a title");

    var tempImg = metadata.title.replace(/\s+/g, '-').replace('\'','-').replace('.','').toLowerCase() + '.jpg';

    if (metadata.image) t.notEqual(speakersImg.indexOf(metadata.image), -1, metadata.image + ' must exist in images/speakers/ folder');
    else t.notEqual(speakersImg.indexOf(tempImg), -1, tempImg + ' must exist in images/speakers/ folder');

    t.ok(metadata.social,"post must have a social value defined");
    t.ok(metadata.handle,"post must have a handle");

    t.end();
  });

});


data.sponsors.metadata.forEach(function(post) {

  test(post.name, function(t) {

    t.equal( typeof post, 'object', 'sponsor must be formatted correctly');

    t.ok(post.name,'sponsor must have a \'name\'');
    t.ok(post.level,'sponsor must have a \'type\'');
    t.notEqual(levels.indexOf(post.level), -1, 'sponsor level must be one of the following: ' + levels.join(', '));

    if (post.level !== 'Individuals') {
      t.notEqual(sponsorImg.indexOf(post.name.toLowerCase() + '.svg'), -1, 'sponsor must have image: _includes/sponsors/' + post.name.toLowerCase() + '.svg')
      t.ok(post.site,'sponsor must have a \'site\'');
    }

    t.end();
  });
});

/*
data.volunteers.metadata.forEach(function(post) {

  test(post.name, function(t) {

    t.equal( typeof post, 'object', 'sponsor must be formatted correctly');

    var social = ['facebook','twitter','instagram','gravatar'];

    t.ok(post.name,'volunteer must have a \'name\'');
    t.ok(post.social,'volunteer must have a \'social\'');
    t.notEqual(social.indexOf(post.social), -1, 'value of \'social\' must be one of the following: ' + social.join(', '));
    t.ok(post.handle,'volunteer must have a \'handle\'');
    var img = post.name.toLowerCase().replace(' ','-').replace('\'','-') + '.png';
    t.notEqual(volunteersImg.indexOf(img), -1, img + ' must exist in images/volunteers/ folder');

    t.end();
  });
});
*/

/*
data.places.metadata.forEach(function(post) {

  test(post.title, function(t) {

    t.equal( typeof post, 'object', 'sponsor must be formatted correctly');

    t.ok(post.address,'place must have an \'address\'');
    t.ok(post.title,'place must have a \'title\'');
    t.ok(post.icon,'place must have an \'icon\'');
    t.ok(post.link,'place must have a \'link\'');
    t.ok(post.coordinates,'place must have \'coordinates\'');

    t.end();
  });
});
*/