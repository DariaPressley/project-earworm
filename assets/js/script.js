const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

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
		q: 'English is hard, but detectably so'
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
        const language = data.data.detections[0][0].language;
        console.log(language);

        const url = 'https://google-translate1.p.rapidapi.com/language/translate/v2/languages?target=' + language;
        console.log(url);

        const options = {
            method: 'GET',
            headers: {
                'Accept-Encoding': 'application/gzip',
                'X-RapidAPI-Key': '1eb102c1ccmsh8787a73e30281e3p11f25ajsncb90c9ddb7c3',
                'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
            }
        };

        fetch(url, options)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json(); // or response.json() if the result is a JSON
            })
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.error('Fetch error: ' + error.message);
            });
    })
    .catch(error => {
        console.error(error);
    });
