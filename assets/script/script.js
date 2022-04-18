//Test de connexion
console.log("Be water my Friend");
console.log("-----");

//Beginning of the project
//API 
const endpoint_the_office = 'https://www.officeapi.dev/api/quotes/';

//HTML elements  
const div = document.querySelector(".suggestions");
const searchBar = document.querySelector(".search")

// fetch is getting the data 
fetch(endpoint_the_office)
    //turn into a json()
    .then(brutData => {
        //brutData is an alias made up
        return brutData.json()
    })
    //get the json data
    .then(cleanData => {
        //get only the objet that I want 
        cleanData = Object.values(cleanData)
        cleanData = cleanData[0]

        // uncomment : displayQuotes(cleanData) if you want to see all the quotes when the page is load 
        // displayQuotes(cleanData)

        //Listen to the searchBar
        searchBar.addEventListener("input", searchQuotes)

        //Get the quotes where the letter of the input correspond to the name or last name of a character
        function searchQuotes(e) {
            //Set the beginning state 
            div.innerHTML = `<ul class="suggestions">
            <li id="theChosenOne">Quotes from the Office</li>
            </ul>`;

            //Get the value of the input 
            const searchInput = e.target.value || "empty"
            console.log("🤖 ~ file: script.js ~ line 41 ~ searchQuotes ~ searchInput", searchInput)

            //Condition of the research (in the firstname or in the lastname)
            const searchArray = cleanData.filter(pseudo => pseudo.character.firstname.toLowerCase().includes(searchInput) || pseudo.character.lastname.toLowerCase().includes(searchInput))

            //On every input use displayQuotes to display the good result 
            displayQuotes(searchArray)
        }

        //Display the Quotes on a li element with a forEach
        function displayQuotes(quotes) {
            quotes.forEach(quote => {
                //First Name, Last Name and Quotes 
                let dataQuotes = quote.content
                let dataFirstName = quote.character.firstname;
                let dataLastName = quote.character.lastname;

                //Create the li
                let makeLi = document.createElement("li");

                //Put the content inside the li
                makeLi.innerHTML = `${dataFirstName} ${dataLastName} ${dataQuotes}`

                //Put in in the div
                div.appendChild(makeLi);
            })
        }
        if (searchInput = "empty") {
            div.innerHTML = `<ul class="suggestions">
            <li id="theChosenOne">Quotes from the Office</li>
            </ul>`;
        }
    })

    // BONUS
    //async fonction , (same result with Object.value)
// async function getQuotes() {
//     const res = await fetch("https://www.officeapi.dev/api/quotes/")
//     const { data } = await res.json();
//     console.log(data)
// }
// getQuotes()