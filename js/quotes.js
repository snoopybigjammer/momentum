const quotes = [
  {
    quote:
      "Stop worrying about the world ending today. It is already tomorrow in Australia.",
    author: "Marcie",
  },

  {
    quote:
      "Learn from yesterday, live for today, look to tomorrow, rest this afternoon.",
    author: "Snoopy",
  },

  {
    quote:
      "No problem is so big or so complicated that it cannot be run away from",
    author: "Linus van Pelt",
  },

  {
    quote: "I have developed a new philosophy. I only dread one day at a time.",
    author: "Charlie Brown",
  },

  {
    quote:
      "When no one loves you, you have to pretend that everyone loves you.",
    author: "Sally Brown",
  },

  {
    quote: "Happiness is a warm puppy.",
    author: "Lucy van Pelt",
  },

  {
    quote: "My anxieties have anxieties.",
    author: "Charlie Brown",
  },

  {
    quote:
      "I never made a mistake in my life. I thought I did once, but I was wrong.",
    author: "Lucy van Pelt",
  },

  {
    quote:
      "I think I have discovered the secret of life. you just hang around until you get used to it.",
    author: "Sally Brown",
  },

  {
    quote:
      "All I really need is love, but a little chocolate now and then does not hurt!",
    author: "Lucy van Pelt",
  },
];

const sentence = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
sentence.innerText = todaysQuote.quote;
author.innerText = "-by " + todaysQuote.author;

// const quote = document.querySelector("#quote span:first-child")
// const author = document.querySelector("#quote span:last-child")

// const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)]

// quote.innerText = todaysQuote.quote
// author.innerText = `-${todaysQuote.author}`
