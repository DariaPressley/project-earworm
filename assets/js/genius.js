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
    var langCardText = document.getElementById("language-card-text");
    langCardText.textContent = "The original lyrics are in " + sourceLang + ".";

}

function getTranslateLang () {
    var translateLang = localStorage.getItem("translateLangEng")
    var langCardText = $("#language-card-text")
    var translateLangText = $("<p> I want to translate the lyrics to " + translateLang + ".<p>")
    langCardText.append(translateLangText)
}

getArtistName();
getSongName();
getSourceLang();
getTranslateLang();

goBackButton.addEventListener ("click", function() {
    window.location.href = "index.html";
}
)

var sourceLangInput = localStorage.getItem('sourceLang')
var translateLangInput = localStorage.getItem('translateLang')
var artistName = localStorage.getItem("artistName");
var songName = localStorage.getItem("songName");

// Concatenate the songName and artistName with a space in between
const searchTerm = songName + " " + artistName;

// Encode the concatenated string for URL
const encodedSearchTerm = encodeURIComponent(searchTerm); // correctly formats the search term to go in the url

const searchUrl = 'https://genius-song-lyrics1.p.rapidapi.com/search/?q=' + encodedSearchTerm + '&per_page=10&page=1'; // Genius API search call
const searchOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1eb102c1ccmsh8787a73e30281e3p11f25ajsncb90c9ddb7c3',
		'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
	}
};

fetch(searchUrl, searchOptions)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(result => { // Getting all the info we need from whatever the user searched
        console.log(result)
        const artistName = result.hits[0].result.primary_artist.name; // artist name
        document.getElementById("artist-card-text").textContent = artistName
        const songTitle = result.hits[0].result.full_title; // song title
        document.getElementById("song-title-text").textContent = songTitle
        const songImage = result.hits[0].result.song_art_image_url; // song image
        $(".card-img").attr("src", songImage) // append image on page
        const songId = result.hits[0].result.id; // song id

        const lyricUrl = 'https://genius-song-lyrics1.p.rapidapi.com/song/lyrics/?id=' + songId; // Genius API song lyric call
        const lyricOptions = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '1eb102c1ccmsh8787a73e30281e3p11f25ajsncb90c9ddb7c3',
                'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
            }
        };

        fetch(lyricUrl, lyricOptions)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(result => {
                const originalLyrics = result.lyrics.lyrics.body.html; // lyrics generated from genius API
                const lyricTextBody = document.getElementById("original-lyrics-text")
                // Removing hrefs for the lyrics to make the lyrics cleaner - hrefs wont redirect anyway
                // Remove href attributes
                var cleanedLyrics = originalLyrics.replace(/ href="[^"]*"/g, '');  //removing href from lyrics 

                // Remove class attributes
                cleanedLyrics = cleanedLyrics.replace(/ class="[^"]*"/g, ''); // removing classes from lyrics

                lyricTextBody.innerHTML = cleanedLyrics;
                console.log(cleanedLyrics)

            const translateUrl = 'https://google-translate1.p.rapidapi.com/language/translate/v2';
            const translateOptions = {
                method: 'POST',
                headers: {
                    'content-type': 'application/x-www-form-urlencoded',
                    'Accept-Encoding': 'application/gzip',
                    'X-RapidAPI-Key': 'c90d154452msha7f11d64980390dp1d5c6fjsn96de4a654446',
                    'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
                },
                body: new URLSearchParams({
                    q: lyricTextBody.innerHTML,// lyrics from genius API
                    target: translateLangInput, // target language code we want to change the lyrics to. replace later with user input.
                    source: sourceLangInput // set source language
                })
            };

            fetch(translateUrl, translateOptions)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.json();
                })
                .then(result => {
                    console.log(result)
                    const translatedLyrics = result.data.translations[0].translatedText;
                    const translateLyricsTextBody =  document.getElementById("translated-lyrics-text")

                    translateLyricsTextBody.innerHTML = translatedLyrics
                    
                    console.log(translatedLyrics); // translated lyrics
                })
            })
        })
