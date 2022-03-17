const quotes = [
    {
        quote:
            "Life is too short and sweet to be spent by cribbing and complaining about things. Here are some random quotes about the most wonderful gift that we've got",
        author: " Life"
    },
    {
        quote:
            "Humor is richly rewarding to the person who employs it. It has some value in gaining and holding attention. But it has no persuasive value at all",
        author: "John Kenneth Galbraith"
    },
    {
        quote:
            "God save me from my friends. I can protect myself from my enemies.",
        author: "Claude Louis Hector de Villars "
    },
    {
        quote: "The price of anything is the amount of life you exchange for it.",
        author: "David Thoreau"
    },
    {
        quote:
            "Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance. ",
        author: "Charles Lindbergh"
    },
    {
        quote:
            "A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.",
        author: " Tyne Daly"
    }
];

let vecesClic = 0; // el usuario ha hecho 0 veces clic en el botón al inicio de la app

// 1. Identificar los elementos del DOM en los que tenemos asociar eventos. Recuperar el elemento del DOM y utilizar el método addEventListener
let button = document.querySelector("#generate-quote");
button.addEventListener("click", function () {
    // 1. Actualizar la variable de estado vecesClic. Haced un console.log de la variable de estado vecesClic 
    vecesClic++;
    console.log("Veces que has hecho click: " + vecesClic);

    // 2. Obtener una nueva cita gracias a la función getRandomQuote
    let randomQuote = getRandomQuote();

    // 3. Cuidado, obtenemos un objeto. Piensa que para acceder a la propiedad del objeto necesitamos utilizar .nombreDeLaPropiedad


    // 4. El valor propiedad "quote"; debe ir en el contenedor identificado con la clase "quote--text"
    document.querySelector(".quote--text").textContent = randomQuote.quote;
    // 4b. El valor de la propiedad "author"; debe ir en el contenedor identificado con la clase "quote--author" 
    document.querySelector(".quote--author").textContent = randomQuote.author;
});

// 2. Identificar si existe algún tipo de estado en nuestra aplicación y crear las variables globales para almacenar esta información

// 3. Cada vez que se capture un evento, considerar si hay que actualizar el estado de la aplicación; y si también hay que modificar la interfaz del usuario con nueva info


// Obtener una posición del array al azar
function getRandomQuote() {

    // calcular un número al azar entre todas las posiciones disponables del array. Nuestro array es "quotes", no "colors"

    let quote = quotes[Math.floor(Math.random() * quotes.length)];

    return quote;
}