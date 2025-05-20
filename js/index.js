const quotes = [
  {
    text: "“Be yourself; everyone else is already taken.”",
    author: "Oscar Wilde",
  },
  {
    text: "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
    author: "Marilyn Monroe",
  },
  { text: "“So many books, so little time.”", author: "Frank Zappa" },
  {
    text: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    author: "Albert Einstein",
  },
  {
    text: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
    author: "Bernard M. Baruch",
  },
  {
    text: "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
    author: "Dr. Seuss",
  },
  {
    text: "“You only live once, but if you do it right, once is enough.”",
    author: "Mae West",
  },
  {
    text: "“Be the change that you wish to see in the world.”",
    author: "Mahatma Gandhi",
  },
  {
    text: "“If you tell the truth, you don't have to remember anything.”",
    author: "Mark Twain",
  },
  {
    text: "““To live is the rarest thing in the world. Most people exist, that is all.”",
    author: "Oscar Wilde",
  },
];

function showRandomQuote() {
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote-text").textContent = `"${random.text}"`;
  document.getElementById("quote-author").textContent = `— ${random.author}`;
}
