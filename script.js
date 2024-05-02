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

//1) Obtenemos botón HTML y elementos HTML a cambiar
let quoteGeneratorButton = document.querySelector('#generate-quote');
let quoteText = document.querySelector(".quote--text").textContent;
let quoteAuthor = document.querySelector(".quote--author").textContent;

//2) Creamos evento para cambiar la cita aleatoriamente
quoteGeneratorButton.addEventListener('click', () => {
    //Cambiamos texto de la cita
    quoteText = quotes[Math.floor(Math.random()*quotes.length)].quote;
    //Cambiamos autor
    quoteAuthor = quotes[Math.floor(Math.random()*quotes.length)].author;
})

