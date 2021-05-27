axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(function (response) {
        document.getElementById('ditto').innerHTML = ifObject(response.data);
    })
    .catch(function(error) {
    // handle error
    console.log(error);
    });

function ifObject(array) {
    let HTML = "";
    for (const property in array) {
        if (typeof array[property] === 'object') {
            HTML += `<ul><li>${property}</li>`;
            HTML += `<ul>`+ ifObject(array[property]) + `</ul>`;
        } else {
            HTML += `<li>${property}: ${array[property]}</li>`;
        }
    }
    return HTML + `</ul>`;
}