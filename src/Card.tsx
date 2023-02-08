import React from 'react'
import './custom.css'



const Card  = ({ quote }: any) => {
   
  return (
    <div className='card px-5 py-8 max-w-[650px]'>
      <p className='mime text-2xl font-mono font-bold'> {quote.quote}</p>
      <span>By {quote.character}</span> |{"  "}
      <a className='mono'
        href={`https://twitter.com/intent/tweet?text="${quote.quote} by ${quote.character}&hashtags-animeQuote`}
        target="_blank"
        rel="noreferrer"
      >
        Tweet
      </a>{" "}
    </div>
  )
}

export default Card
