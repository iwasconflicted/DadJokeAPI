let jokeBtn = document.getElementById("jokeBtn");
let displayJoke = document.getElementById("displayJoke");

const API= 'https://icanhazdadjoke.com/';

async function getJoke(){
    response = await fetch(API, {
        headers: {
            'accept': 'application/json',
        }
    })
    data = await response.json();
    displayJoke.innerText = data.joke;
}

jokeBtn.addEventListener("click", function(){
    getJoke();
})

