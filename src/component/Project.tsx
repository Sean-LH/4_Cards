// import React from 'react'
import Header from './Header'
import Body from './Body'

type Props = {}

export default function Project({}: Props) {
  return (
    <div id='project'>
      <Header/>
      <Body/>
      <footer>
        <p>Built by Sean Horace</p>
        <p>Design provided by <a href="https://www.frontendmentor.io/">frontendmentor.io</a></p>
      </footer>
    </div>
  )
}