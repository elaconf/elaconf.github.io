var fs = require('fs'),
request = require('request'),
jsyaml = require('js-yaml');


var data = {
  volunteers: readData('_data/', 'volunteers.yml')
};

var volunteers = data.volunteers.metadata;


volunteers.forEach(function(file) {
  var name = file.name.toLowerCase().split(' ').join('-').replace('\'','-') + '.png';
  var file = 'https://avatars.io/'+file.social+'/' + file.handle;
  
  var download = function(uri, filename, callback) {
    request.head(uri, function(err, res, body){
      console.log('content-type:', res.headers['content-type']);
      console.log('content-length:', res.headers['content-length']);
      
      request(uri).pipe(fs.createWriteStream('images/volunteers/' + filename)).on('close', callback);
    });
  };
  
  download(file, name, function(){
    console.log('done');
  });
})


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

