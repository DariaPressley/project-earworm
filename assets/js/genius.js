var artistName = localStorage.getItem("artistName");
var artistText = document.getElementById("artist-card-text")


function getArtistName () {
    var artistName = localStorage.getItem("artistName");
    var artistText = document.getElementById("artist-card-text")
    artistText.textContent = artistName
}

function getSongName () {
    var songName = localStorage.getItem("songName");
    var songText = document.getElementById("song-title-text");
    songText.textContent = songName
}

function getSourceLang () {
    var sourceLang = localStorage.getItem("sourceLangEng");
    var sourceLangtext = document.getElementById("source-language-card-text");
    sourceLangtext.textContent = sourceLang

}

function getTranslateLang () {
    var translateLang = localStorage.getItem("translateLangEng")
    var translateLangtext = document.getElementById("translated-language-card-text")
    translateLangtext.textContent = translateLang
}

getArtistName();
getSongName();
getSourceLang();

goBackButton.addEventListener ("click", function() {
    window.location.href = "index.html";
}
)






// const songName = "All of me"; // Replace with user input
// const url = 'https://genius-song-lyrics1.p.rapidapi.com/search/?q=' + songName + '&per_page=10&page=1'; // Genius API search call
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '1eb102c1ccmsh8787a73e30281e3p11f25ajsncb90c9ddb7c3',
// 		'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
// 	}
// };

// fetch(url, options)
//     .then(response => {
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         return response.json();
//     })
//     .then(result => { // Getting all the info we need from whatever the user searched
//         console.log(result)
//         const artistName = result.hits[0].result.primary_artist.name; // artist name
//         const songTitle = result.hits[0].result.full_title; // song title
//         const songImage = result.hits[0].result.song_art_image_url; // song image
//         const songId = result.hits[0].result.id; // song id

//         const url = 'https://genius-song-lyrics1.p.rapidapi.com/song/lyrics/?id=' + songId; // Genius API song lyric call
//         const options = {
//             method: 'GET',
//             headers: {
//                 'X-RapidAPI-Key': '1eb102c1ccmsh8787a73e30281e3p11f25ajsncb90c9ddb7c3',
//                 'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
//             }
//         };

//         fetch(url, options)
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error(`HTTP error! Status: ${response.status}`);
//                 }
//                 return response.json();
//             })
//             .then(result => {
//                 console.log(result)
//                 const originalLyrics = result.lyrics.lyrics.body.html; // lyrics generated from genius API
//                 console.log(originalLyrics);

//                 const detecturl = 'https://google-translate1.p.rapidapi.com/language/translate/v2/detect';  // Detect language call with Translate API
//                 const detectoptions = {
//                     method: 'POST',
//                     headers: {
//                         'content-type': 'application/x-www-form-urlencoded',
//                         'Accept-Encoding': 'application/gzip',
//                         'X-RapidAPI-Key': '6619f90da8msh59c12f6daf73a82p1a280cjsneb6601c06c64',
//                         'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
//                     },
//                     body: new URLSearchParams({
//                         q: originalLyrics // lyrics from genius API
//                     })
//                 };

//                 fetch(detecturl, detectoptions)
//                     .then(response => {
//                         if (!response.ok) {
//                             throw new Error(`HTTP error! Status: ${response.status}`);
//                         }
//                         return response.json();
//                     })
//                     .then(data => {
//                         console.log(data)
//                         const language = data.data.detections[0][0].language; // detects the language of the original lyrics
//                         console.log(language);

//                         const getLanguageUrl = 'https://google-translate1.p.rapidapi.com/language/translate/v2/languages?target=' + language;
//                         const getLanguageOptions = {
//                             method: 'GET',
//                             headers: {
//                                 'Accept-Encoding': 'application/gzip',
//                                 'X-RapidAPI-Key': '6619f90da8msh59c12f6daf73a82p1a280cjsneb6601c06c64',
//                                 'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
//                             }
//                         };

//                         fetch(getLanguageUrl, getLanguageOptions)
//                             .then(response => {
//                                 if (!response.ok) {
//                                     throw new Error(`HTTP error! Status: ${response.status}`);
//                                 }
//                                 return response.json();
//                             })
//                             .then(result => {
//                                 console.log(result)
//                                 for (let i = 0; i < result.data.languages.length; i++) { //for loop that iterates through all data languages
//                                     console.log(result)
//                                     const availableTranslations = result.data.languages[i].language; 
//                                     const availableTranslationsEng = result.data.languages[i].name;
                                    
//                                     console.log(availableTranslations); // return language codes available to translate from
//                                     console.log(availableTranslationsEng); // returns available translations in English
//                                 }

//                                 const translateUrl = 'https://google-translate1.p.rapidapi.com/language/translate/v2';
//                                 const translateOptions = {
//                                     method: 'POST',
//                                     headers: {
//                                         'content-type': 'application/x-www-form-urlencoded',
//                                         'Accept-Encoding': 'application/gzip',
//                                         'X-RapidAPI-Key': '6619f90da8msh59c12f6daf73a82p1a280cjsneb6601c06c64',
//                                         'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
//                                     },
//                                     body: new URLSearchParams({
//                                         q: originalLyrics, // lyrics from genius API
//                                         target: "es", // target language code we want to change the lyrics to. replace later with user input.
//                                         source: language // set source language
//                                     })
//                                 };

//                                 fetch(translateUrl, translateOptions)
//                                     .then(response => {
//                                         if (!response.ok) {
//                                             throw new Error(`HTTP error! Status: ${response.status}`);
//                                         }
//                                         return response.json();
//                                     })
//                                     .then(result => {
//                                         console.log(result)
//                                         const translatedLyrics = result.data.translations[0].translatedText;
//                                         console.log(translatedLyrics); // translated lyrics
//                                     })
//                                     .catch(error => console.error('Fetch error: ' + error.message));
//                             })
//                             .catch(error => console.error('Fetch error: ' + error.message));
//                     })
//                     .catch(error => console.error(error));
//             })
//             .catch(error => console.error(error));
//     })
//     .catch(error => console.error(error));

