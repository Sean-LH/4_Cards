// import React from 'react'

import Subtitle from "./Subtitle"
import Title from "./Title"

type Props = {}
type titles = {
  title1: string;
  title2: string;
}
const fullTitles: titles = {
  title1: "Reliable, efficient delivery",
  title2: "Powered by Technology"
}

export default function Header({}: Props) {
  return (
    <div id="header">
      <Title 
        title1 = {fullTitles.title1}
        title2={fullTitles.title2}
      ></Title>
      <Subtitle/>
    </div>
  )
}