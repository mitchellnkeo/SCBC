import { useState } from 'react'
import NavBar from './NavBar.jsx'
import Body from './Body.jsx'

function App() {
  return (
    <div className="grid grid-rows-[auto,1fr] h-screen">
      <NavBar />
      <Body />
    </div>
  )
}

export default App
