import { useState } from 'react';
import Card from './Card';
import './custom.css'



function App() {

  const [ quote, setQuote ] = useState({
    anime: 'Romanse',
    character: 'Nenad Stanojevic',
    quote: 'When you love something, It is natural to worry about it.'

  });

  function getQuote() {
    fetch("https://animechan.vercel.app/api/random")
    .then((res) => res.json())
    .then((data) => setQuote(data))
    .catch((error) => console.log(error.message));
  }
 
  return (
    <div className="App h-screen flex justify-center items-center">
      <div>
        {quote && <Card quote={quote} />}
        <button
          onClick={getQuote}
          className=" bg-green-400 px-5 py-4 mt-5 text-white"
        >
          Get Quote
        </button>
      </div>
    </div>
  );
}

export default App;
