const quotes = [
    "It is easy to sit up and take notice, what's difficult is getting up and taking action.",
    "The best way to get started is to quit talking and begin doing.",
    "Success usually comes to those who are too busy to be looking for it.",
    "Don't be afraid to give up the good to go for the great.",
    "Opportunities don't happen. You create them."
  ];

  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').innerText = quotes[randomIndex];
  }