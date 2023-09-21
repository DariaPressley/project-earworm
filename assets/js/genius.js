// var songEL = document.getElementById('song');
// var artistEl = document.getElementById('artist');
// var lyricsEl = document.getElementById ('lyrics');
// var searchEl = document.getElementById ('search')

// function getApi() {
//     var requestUrl = 'https://genius-song-lyrics1.p.rapidapi.com/search/multi/?q=%3CREQUIRED%3E&per_page=3&page=1';
// } 
//   searchButton.addEventListener('search', getApi);


var artist = document.getElementById('modal-artist-input');
var title = document.getElementById ('modal-song-input').value;
var saveArtist = document.getElementById ("artist-submit");
var saveSong = document.getElementById ("song-submit");
var artistArea = document.getElementById ("find-artist-textarea")

saveArtist.addEventListener ('click', function (event) {
  event.preventDefault(); 
  artistArea.textContent=artist.value
    
  });

var id;

const settings = {
	async: true,
	crossDomain: true,
	url: 'https://genius-song-lyrics1.p.rapidapi.com/search/multi/?q=' + artist +title + '&per_page=3&page=1',
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '307037ba87msh679b27d5898dc92p15467bjsnd808822351aa',
		'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com',
	}
};

$.ajax(settings).then(function (response) {
	console.log(response.sections[0].hits[0].result.id);
  id = response.sections[0].hits[0].result.id


  const settings = {
    async: true,
    crossDomain: true,
    url: 'https://genius-song-lyrics1.p.rapidapi.com/song/lyrics/?id='+id,
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '6619f90da8msh59c12f6daf73a82p1a280cjsneb6601c06c64',
      'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
    }
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response.lyrics.lyrics.body.html);
  }); 

});

const url = 'https://genius-song-lyrics1.p.rapidapi.com/search/multi/?q=shake%20it%20off%20taylor%20swift&per_page=3&page=1';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6619f90da8msh59c12f6daf73a82p1a280cjsneb6601c06c64',
		'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
