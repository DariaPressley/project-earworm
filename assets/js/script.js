const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

const geniusLyrics = "English is hard but detectably so" // placeholder for genius lyrics we get from genius API

// myModal.addEventListener('shown.bs.modal', () => {
//   myInput.focus()
// })

const detecturl = 'https://google-translate1.p.rapidapi.com/language/translate/v2/detect';
const detectoptions = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'Accept-Encoding': 'application/gzip',
		'X-RapidAPI-Key': '1eb102c1ccmsh8787a73e30281e3p11f25ajsncb90c9ddb7c3',
		'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
	},
	body: new URLSearchParams({
		q: geniusLyrics // lyrics from genius API//
	})
};

fetch(detecturl, detectoptions)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        const language = data.data.detections[0][0].language;// detects the language of the original lyrics//
        console.log(language);

        const getLanguageUrl = 'https://google-translate1.p.rapidapi.com/language/translate/v2/languages?target=' + language;

        const getLanguageOptions = {
            method: 'GET',
            headers: {
                'Accept-Encoding': 'application/gzip',
                'X-RapidAPI-Key': '1eb102c1ccmsh8787a73e30281e3p11f25ajsncb90c9ddb7c3',
                'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
            }
        };

        fetch(getLanguageUrl, getLanguageOptions)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json(); 
            })
            .then(result => {
				for (let i = 0; i < result.data.languages.length; i++) {
				const availableTranslations = result.data.languages[i].language;
				
                console.log(availableTranslations); // return languages available to translate from
				}

                const translateUrl = 'https://google-translate1.p.rapidapi.com/language/translate/v2';
                const translateOptions = {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded',
                        'Accept-Encoding': 'application/gzip',
                        'X-RapidAPI-Key': '1eb102c1ccmsh8787a73e30281e3p11f25ajsncb90c9ddb7c3',
                        'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
                    },
                    body: new URLSearchParams({
                        q: geniusLyrics, // lyrics from genius API
                        target: "es", // target language we want to change the lyrics to
                        source: language // set source language
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
						const translatedLyrics = result.data.translations[0].translatedText
                        console.log(translatedLyrics); // translated lyrics
                    })
                    .catch(error => {
                        console.error('Fetch error: ' + error.message);
                    });
            })
            .catch(error => {
                console.error('Fetch error: ' + error.message);
            });
    })
    .catch(error => {
        console.error(error);
    });
