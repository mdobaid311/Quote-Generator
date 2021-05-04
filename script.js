const quoteText = document.getElementById("quote");
const authorText=document.getElementById('author')
const newQuoteBtn=document.getElementById('new-quote')
const twitterBtn=document.getElementById('twitter')
// Get Quotes From API
let apiQuotes = [];

// Show new quote
function newQuote() {
  // Pick a random quote form apiQuotes array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  quoteText.innerText = quote.text;
  authorText.innerText=quote.author

}

async function getQuotes() {
  const apiUrl = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    let quoted = newQuote();
    clg(quoted);
  } catch (error) {
    //    Catch Error Here
  }
}

newQuoteBtn.addEventListener('click',newQuote)

// On Load
getQuotes();
