var express = require('express');
var unirest = require('unirest');
const data = require('./data.json');
const fs = require('fs');
const request = require('request');
const zlib = require('zlib');
const app = express();

console.log(Object.keys(data));
console.log(data.items.length);
console.log(data.items)


var allUrls = data.items.map(entry => {
  return entry.image_thumb;
})

var imageLarge = data.items.map(entry => {
  return entry.image_large;
})

var imageMobile1 = data.items.map(entry => {
  return entry.image_mobile_1_url;
})

var imageMobile2 = data.items.map(entry => {
  return entry.image_mobile_2_url;
})
/*
function callAPIs ( host, paths ) {
  var path = paths.shift();
  var unireq = unirest.get('http://climate.nasa.gov/' + path);
  unireq.options['encoding'] = 'binary';	
  console.log(path); 
  unireq.end(function(response){
    if (response.statusCode === 200){
      console.log(paths);	    
      fs.writeFile('../' + path,response.body,{encoding:'binary'});

      setTimeout(callAPIs.bind(null, host, paths),1000);
    } else{
      console.log('something went wrong');
    }
  });
}

callAPIs(host, allUrls)
*/



var host = 'http://climate.nasa.gov/';

var download = function(uri, filename, callback){
  request.get(uri,{encoding:null}, function(err, res, body){
    console.log('headers', res.headers);
    console.log('content-type:', res.headers['content-type']);
    console.log('content-length:', res.headers['content-length']);
    console.log('content-encoding:', res.headers['content-encoding']);

      var fullFileName = filename+'.gz';
   
      //check if file exists
      fs.stat(fullFileName, function(err,stat){
	if(err === null){
         //file exists, do nothing
         console.log('file exists');
         return
         } else {
          //file doesn't exist, pull it in
	  if (res.headers['content-encoding'] === 'gzip'){
            var unzip = zlib.createGunzip()
            request(uri).pipe(fs.createWriteStream(filename+'.gz')).on('close', callback);
          } else {
            request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
          }
	 }
      });

  });
};

/*
allUrls.forEach(path => {
  download(host + path , '../'+path , function(){
    console.log('done with ' + path);
  });
})
*/

imageLarge.forEach(path => {
  download(host + path , '../'+path , function(){
    console.log('done with ' + path);
  });
})

imageMobile1.forEach(path => {
  download(host + path , '../'+path , function(){
    console.log('done with ' + path);
  });
})

imageMobile2.forEach(path => {
  download(host + path , '../'+path , function(){
    console.log('done with ' + path);
  });
})
/*
var allUrl = data.items.map(entry => {
	var base = 'http://climate.nasa.gov'
	var unireq = unirest.get(base + entry.image_thumb)
	unireq.options['encoding'] = 'binary';	
	unireq.end(function(response){
	  
	  if (response.statusCode === 200){
	    console.log('status 200: ' + base + entry.image_thumb);

	    fs.writeFile('../' + entry.image_thumb,response.body,'binary',function(err){
	      if(err){
	        console.log(err);
	      }else{
	        console.log('File ' + entry.image_thumb + ' saved');
	      }
	    });

	  }else{
	    console.log('something went wrong');
	  }
	});
	return entry.image_thumb;
})
*/



app.listen(3001, function () {
  console.log('Example app listening on port 3001!')
})
