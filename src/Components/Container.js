import React from 'react'
import Header from './Header/Header'
import Cards from "./Cards/Cards"
import Dropdown from './Dropdown/Dropdown'
import Graphic from './Graphic/Graphic'

function Container() {
  return (
    <div>
      <Header />
      <Cards />
      <Dropdown />
      <Graphic />
    </div>
  )
}

export default Container