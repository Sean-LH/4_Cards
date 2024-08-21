// import React from 'react'

type Props = {
  title: string;
  info: string;
  image: string
  alt: string
}

export default function Card({title, info, image, alt}: Props) {
  return (
    <div className='card'>
      <section className='words'>
        <h2>{title}</h2>
        <p>{info}</p>
      </section>
      <div id='picSpace'>
        <img src={image} alt={alt} className='pics'/>
      </div>
    </div>
  )
}