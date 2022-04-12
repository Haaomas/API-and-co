//Test de connexion
console.log("Be water my Friend");
console.log("-----");

//Beginning of the project
//LES APIS 
// const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const endpoint_the_office = 'https://www.officeapi.dev/api/quotes/';

//Les éléments HTML à sélectionner 
const div = document.querySelector(".suggestions");
const input = document.querySelector(".search")

/*Pseudo Code
    2 Lier la barre de recherche et rendre recherche dynamique via l'url  
 */


//TODO Vérifier comment récupérer des éléments en particulier dans la doc de l'api 
// Le fetch reçoit les infos 
fetch('https://www.officeapi.dev/api/quotes/')
    //Puis on transforme en json()
    .then(unAliasPourLaReponseQueMerenvoieMonAPI => {
        return unAliasPourLaReponseQueMerenvoieMonAPI.json()
    })
    //On récupérer les data du json
    .then(unAliasPourSesDonnées => {
        //Conversion spécifique pour mon cas vu que c'est un object et non un tableau 
        //TODO Essayer de réduire en une seule ligne   
        unAliasPourSesDonnées = Object.values(unAliasPourSesDonnées)
        unAliasPourSesDonnées = unAliasPourSesDonnées[0]
        //FIN DU GOOD 

        //MON IDEE
        // //TODO Rendre dataQuotes dynamique 
        // let dataQuotes = unAliasPourSesDonnées[0].content
        // console.log('dataQuotes', dataQuotes)
        // let dataFirstName = unAliasPourSesDonnées.character.firstname
        // console.log('dataFirstName', dataFirstName)
        // let dataLastName = unAliasPourSesDonnées.character.lastname
        // console.log('dataLastName', dataLastName)

        //La ForEach de Tiff (fonctionne mais pas sûr d'en avoir besoin)
        unAliasPourSesDonnées.forEach(values => {

            //Sur la bonne voie continuer avec le appendChild !!!
            let dataQuotes = values.content
            let dataFirstName = values.character.firstname;
            let dataLastName = values.character.lastname;

            const node = document.createElement("li");

            //Prénom du personage 
            const innerFirstName = document.createTextNode(`${dataFirstName} `);
            node.appendChild(innerFirstName);


            //Nom du personage
            const innerLastName = document.createTextNode(`${dataLastName}. `);
            node.appendChild(innerLastName);
            div.appendChild(node);

            //Citation 
            const innerQuotes = document.createTextNode(`${dataQuotes} `);
            node.appendChild(innerQuotes);

        })
    })





//Caractéristique d'une citation
//     0:
// character: {_id: '5e93b4a43af44260882e33b0', firstname: 'Michael', lastname: 'Scott', __v: 0}
// content: "If I had a gun with two bullets and I was in a room with Hitler, Bin Laden, and Toby, I would shoot Toby twice."
// __v: 0
// _id: "5e9664cff87ac15464c55f1b"


//MAXIME PIE EXERCICE !!!
// fetch(`https://api.thecatapi.com/v1/images/search?limit=${buttonNumber}&mime_types=gif&breed_ids=${idButton}`)
// function displayCat() {
//     // https://api.thecatapi.com/v1/images/search?limit=3&mime_types=${fileType}&breed_ids={$selectedBreed}
//     // fetch(`https://api.thecatapi.com/v1/images/search?limit=3&mime_types=${fileType}`)
//     fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=beng`)
//         .then(response => response.json())
//         .then(function (catsData) {
//             console.log(catsData);
//             catsList.innerHTML = null;

//             catsData.forEach(cat => {
//                 const catImageElement = document.createElement("img");
//                 catImageElement.src = cat.url;
//                 catsList.appendChild(catImageElement);
//             })
//         })
// }
//     console.log(displayCat())