var test = require('tape');
var fs = require('fs');
var path =  require('path');
var jsyaml = require('js-yaml');

var posts = []
var organizers = []
fs.readdirSync('_organizers/').forEach(function(i) {
  if ( i != 'index.md' && i != 'index.html') {
    organizers.push('_organizers/' + i);
    posts.push('_organizers/' + i);
  }
});

var organizersImg = []
fs.readdirSync('images/organizers/').forEach(function(i) {
  organizersImg.push(i);
});

/*
var agenda = []
fs.readdirSync('agenda/_posts/').forEach(function(i) {
agenda.push('agenda/_posts/' + i);
posts.push('agenda/_posts/' + i);
});
*/

var speakers = []
fs.readdirSync('_speakers/').forEach(function(i) {
  speakers.push('_speakers/' + i);
  posts.push('_speakers/' + i);
});

var speakersImg = []
fs.readdirSync('images/speakers/').forEach(function(i) {
  speakersImg.push(i);
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
  levels: readData('_data/', 'levels.yml'),
};
// build array of sponsors
var sponsors = data.sponsors.metadata.map(function(post) {
  return post.name;
});
// build array of levels
var levels = [];
for (var level in data.levels.metadata) {
  levels.push(level);
}

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
    t.ok(metadata.twitter,"post must have a twitter");

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

if (!metadata.permalink) {
var permalink = post.replace('_posts','').replace('.md','/').replace(/[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]-/,'').replace('//','/');
} else {
var permalink = metadata.permalink;
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
    t.ok(metadata.image,"post must have a image");
    t.notEqual(speakersImg.indexOf(metadata.image), -1, metadata.image + ' must exist in images/speakers/ folder');
    if (metadata.instagram) t.ok(metadata.instagram,"post can have an instagram");
    else t.ok(metadata.twitter,"post must have a twitter");

    t.end();
  });

});



data.sponsors.metadata.forEach(function(post) {

  test(post.name, function(t) {

    t.equal( typeof post, 'object', 'sponsor must be formatted correctly');

    t.ok(post.name,'sponsor must have a \'name\'');
    t.ok(post.image,'sponsor must have an \'image\'');
    t.ok(post.site,'sponsor must have a \'site\'');
    t.ok(post.level,'sponsor must have a \'type\'');
    t.ok(post.twitter,'sponsor must have a \'twitter\'');
    t.notEqual(levels.indexOf(post.level), -1, 'sponsor level must be one of the following: ' + levels.join(', '));

    t.end();
  });
});
