let quotes = [
    `Without mathematics, there’s nothing you can do. Everything around you is mathematics. Everything around you is numbers.
    — Shakuntala Devi`,
    `It is impossible to be a mathematician without being a poet in soul.
    — Sofia Kovalevskaya`,
    `In mathematics the art of proposing a question must be held of higher value than solving it.   
    — Georg Cantor`,
    `Arithmetic is being able to count up to twenty without taking off your shoes. —Mickey Mouse `,
    `3 out of 2 people don't understand fractions  —Unknown`,
    `83% of statistics are made up on the spot —Unknown`, 
    "That awkward moment when you finish a math problem and your answer isn’t even one of the many choices — Ritu Ghatourey", 
    "Mathematics is not a careful march down a well-cleared highway, but a journey into a strange wilderness, where the explorers often get lost.  —W.S. Anglin.",
    "If people do not believe that mathematics is simple, it is only because they do not realize how complicated life is. — Johann von Neumann",
    "Do not disturb my circles —Archimedes"
  ];
  
  document.addEventListener("DOMContentLoaded", function(event) {
    // Random quote of the day generator
    const randomQuote = function() {
      document.querySelector('#QuoteGenerator').textContent = `${quotes[Math.floor(Math.random() * quotes.length)]}`;
    };
    randomQuote();
  
    // Do all of your work inside the document.addEventListener  

  
    // Part 2
  document.querySelector('body').style.backgroundColor = '#87CEFA'
 
     
    // Part 8
  document.querySelector('#QuoteGenerator').addEventListener('click', (evt) => {
    randomQuote()
  })

  
  
  });