#!/usr/bin/env node

// Require dependencies
var Base64 = require('js-base64').Base64;
var fs = require('fs');
var request = require('request');
var _ = require('underscore');
var slugify = require('slugify')

getIssuesWrapper(function(err, res) {
  if (err) return callback(err);
  var tickets = sortTickets(res);
  
  var speakers = tickets['speaker'];
  var lightingtalks = tickets['lightning'];
  
  var allSpeakers = [];
  
  lightingtalks.forEach(function(talk) {
    var body = talk.body.split('\n');
    var name = talk.title.substring(talk.title.indexOf(":")+1).trim()
    var fname = name.split(' ').slice(0,1).toString();
    var email = body[3].replace('Email |  ','').trim();
    var type = 'lightning talk';
    var title = body[13].replace('title:','').trim();
    var social = body[4].replace('Twitter |  ','').trim();
    var bio = body[5].replace('Bio |  ','').trim()
    
    var slug = slugify(name).toLowerCase().replace('.','');
    
    var data = '---\n';
    data += 'title: ' + name + '\n'
    data += 'social: twitter\n'
    data += 'handle: ' + social.replace('https://twitter.com/','').replace('@','') + '\n'
    data += '---\n\n'
    data += bio  
    
    talk.labels.forEach(function(label) {
      if (label.name == 'Speaker accepted') {
        fs.writeFileSync('_speakers/'+slug+'.md', data, 'utf-8');
      }
    })
    
    
  });
  
  speakers.forEach(function(talk) {
    var body = talk.body.split('\n');
    var name = talk.title.substring(talk.title.indexOf(":")+1).trim()
    var fname = name.split(' ').slice(0,1).toString();
    var email = body[3].replace('Email |  ','').trim()
    var type = body[8].replace('What would you like to present? |  ','').trim().replace('A Talk (20 minutes)','talk').replace('A Panel (60 minutes)','panel').replace('A Workshop (60 minutes)','workshop')
    var title = body[16].replace('title:','').trim();
    var handle = body[6].replace('Twitter |  ','').trim();
    
    if (handle.substr(0,28) == 'https://www.linkedin.com/in/') {
      var social = 'linkedin'
    } else {
      var social = 'twitter'
    }
    
    var socials = ['facebook','twitter','instagram','gravatar'];
    
    var bio = body[5].replace('Bio |  ','').trim();
    
    var slug = slugify(name).toLowerCase().replace('.','');
    
    var data = '---\n';
    data += 'title: ' + name + '\n'
    data += 'social: '+ social +'\n'
    data += 'handle: ' + handle.replace('https://twitter.com/','').replace('@','').replace('https://www.linkedin.com/in/','') + '\n'
    if (socials.indexOf(social) == -1) data += 'image: '+ slug +'.jpg\n'
    data += '---\n\n'
    data += bio  
    
    talk.labels.forEach(function(label) {
      if (label.name == 'Speaker accepted') {
        fs.writeFileSync('_speakers/'+slug+'.md', data, 'utf-8');
      }
    })
    
    if (socials.indexOf(social) == -1) console.log('Get image for '+ name)
    
    
  });
  
  
  
});


function getIssuesWrapper(callback) {
  var results = [];
  var params = {
    access_token: process.env.GithubAccessToken,
    page: 1,
    per_page: 100
  };
  getIssues(params);
  
  function getIssues(params) {
    var url = 'https://api.github.com/repos/katydecorah/elaconf/issues?page=' + params.page + '&per_page=' + params.per_page;
    var opts = {
      url: url,
      headers: {
        'User-Agent': 'katydecorah',
        'Authorization': 'token ' + params.access_token
      }
    };
    
    request(opts, function(err, res, body) {
      if (err) return callback(err);
      if (res.statusCode !== 200) return callback(new Error('Got HTTP ' + res.statusCode + ' for ' + url));
      
      var response = JSON.parse(body);
      for (var i = 0; i < response.length; i++) {
        results.push(response[i]);
      }
      
      if (response.length === params.per_page) {
        params.page++;
        getIssues(params);
      } else {
        callback(null, results);
      }
    });
  }
}


function sortTickets(tickets) {
  var elaTickets = {
    speaker: [],
    lightning: [],
    other: []
  };
  
  for (var i = 0; i < tickets.length; i++) {
    var labels = tickets[i].labels;
    var names = [];
    for (var j = 0; j < labels.length; j++) {
      names.push(labels[j].name);
    }
    
    // Separate sprint, conference, and other tickets
    if (_.contains(names, 'speaker')) elaTickets.speaker.push(tickets[i]);
    else if (_.contains(names, 'lightning talk')) elaTickets.lightning.push(tickets[i]);
    else elaTickets.other.push(tickets[i]);
  }
  
  return elaTickets;
}
