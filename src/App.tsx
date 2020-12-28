import React from 'react'
import { render } from 'react-dom'
import { GlobalStyle } from './styles/GlobalStyle'

import Home from './pages/home'

const mainElement = document.createElement('div')
mainElement.setAttribute('id', 'root')
document.body.appendChild(mainElement)

const fontStyle = document.createElement('link')
const googleFont = document.createElement('link')

googleFont.setAttribute('href','https://fonts.gstatic.com')
googleFont.setAttribute('rel','preconnect')

fontStyle.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100&display=swap')
fontStyle.setAttribute('rel', 'stylesheet')

document.head.appendChild(googleFont)
document.head.appendChild(fontStyle)

const App = () => {
  return (
    <>
      <GlobalStyle/>
      <Home/>
    </>
  )
}

render(<App />, mainElement)