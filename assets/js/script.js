var songEL = document.getElementById('song');
var artistEl = document.getElementById('artist');
var lyricsEl = document.getElementById ('lyrics');
var searchEl = document.getElementById ('search');

var artist = document.getElementById('modal-artist-input');
var title = document.getElementById ('modal-song-input');
var saveArtist = document.getElementById ("artist-submit");
var saveSong = document.getElementById ("song-submit");
var artistArea = document.getElementById ("find-artist-textarea");
var songArea = document.getElementById("find-song-textarea");
var sourceDropdown = document.getElementById("language-song-lyrics-dropdown");
var translateDropdown = document.getElementById("language-translate-lyrics-dropdown");
var translateButton = document.getElementById ("translateButton");
var goBackButton = document.getElementById ("goBackButton");

saveArtist.addEventListener ('click', function (event) {
    event.preventDefault();
    var artistName = artistArea.textContent = artist.value
    console.log(artist)
    localStorage.setItem("artistName", artistName)
    artistName =  document.getElementById("artist-card-text")
    });


saveSong.addEventListener ('click', function (event) {
    event.preventDefault();
    var songName = songArea.textContent = title.value
    localStorage.setItem("songName", songName)
    songName =  document.getElementById("song-title-text")
    console.log(artist)
    });

sourceDropdown.addEventListener ("change",function()  {
    var sourceLanguage = sourceDropdown.value
    var sourceLanguageEng = sourceDropdown.options[sourceDropdown.selectedIndex].text;
    localStorage.setItem("sourceLang", sourceLanguage);
    console.log(sourceLanguage)
    localStorage.setItem("sourceLangEng", sourceLanguageEng)
    console.log(sourceLanguageEng)

});

translateDropdown.addEventListener ("change", function () {
    var translateLanguage = translateDropdown.value
    var translateLanguageEng = translateDropdown.options[translateDropdown.selectedIndex].text;
    localStorage.setItem("translateLang", translateLanguage);
    console.log(translateLanguage)
    localStorage.setItem("translateLangEng", translateLanguageEng)
    console.log(translateLanguageEng)
})

translateButton.addEventListener ("click", function() {
    window.location.href = "landingPage.html";
    }
)


var artistName =  document.getElementById("artist-card-text")

const myModal = document.getElementById('myModal');
const myInput = document.getElementById('myInput');


