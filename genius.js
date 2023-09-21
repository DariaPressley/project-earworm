// var songEL = document.getElementById('song');
// var artistEl = document.getElementById('artist');
// var lyricsEl = document.getElementById ('lyrics');
// var searchEl = document.getElementById ('search')

// function getApi() {
//     var requestUrl = 'https://genius-song-lyrics1.p.rapidapi.com/search/multi/?q=%3CREQUIRED%3E&per_page=3&page=1';
// } 
//   searchButton.addEventListener('search', getApi);

var id;

const settings = {
	async: true,
	crossDomain: true,
	url: 'https://genius-song-lyrics1.p.rapidapi.com/search/multi/?q=beatles+let+it+be&per_page=3&page=1',
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '307037ba87msh679b27d5898dc92p15467bjsnd808822351aa',
		'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
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
      'X-RapidAPI-Key': '307037ba87msh679b27d5898dc92p15467bjsnd808822351aa',
      'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
    }
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response.lyrics.lyrics.body.html);
  });