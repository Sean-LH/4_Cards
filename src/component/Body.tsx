// import React from 'react'

import Card from "./Card"
// I'm getting the idea to input the card info into an array of objects then have 
// mapped through using the map method. This is part of using typescript and React.

import supervisor from "../../images/icon-supervisor.svg"
type Props = {}

type Cards = {
  id: number;
  title: string;
  info: string;
  image: string; // image URL will go here
  alt: string
}

const allCards: Cards[] = [
  {
    id:1,
    title: "Supervisor",
    info: "Monitors activity to identify project roadblocks",
    image: supervisor,
    alt: 'magnifying glass'
  },
  {
    id: 2,
    title: 'Team Builder',
    info: "Scans our talent network to create the optimal team for your project",
    image: "/images/icon-team-builder.svg",
    alt: "red house"
  },
  {
    id: 3,
    title: "Karma",
    info: "Regularly evaluates our talent to ensure quality",
    image: "/images/icon-karma.svg",
    alt: "light bulb"
  },
  {
    id: 4,
    title: "Calculator",
    info: "Uses data from past projects to provide better delivery estimates",
    image: "/images/icon-calculator.svg",
    alt: "computer image"
  }
]

const showCards = allCards.map((card)=>{
  return(
    <Card
      key={card.id}
      title={card.title}
      info={card.info}
      image={card.image}
      alt={card.alt}/>
  )
})

export default function Body({}: Props) {
  return (
    <div id="body">

      {showCards}
      {/* <Card></Card>
      <Card></Card>
      <Card></Card> */}

    </div>
  )
}