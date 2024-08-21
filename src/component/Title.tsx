// import React from 'react'

type Props = {
  title1: string;
  title2: string;
}

export default function Title({title1, title2}: Props) {
  return (
    <div id="titles-wrap">
      <h1 className="title one">{title1}</h1>
      <h1 className="title two">{title2}</h1>
    </div>
  )
}