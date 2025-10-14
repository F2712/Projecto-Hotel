import { useState } from 'react'
import { Info } from './componentes/Info'
import { Formulario } from './componentes/formulario'
import logo from './assets/img/logo.png'

import './App.css'
import Facebook from './assets/img/Facebook.png'
import Instagram from './assets/img/ig.png'


function App() {
  return (
    <>      
      <div className='todo'>
        <img src={logo} id='logo'/>
        <div className='importante'>
          <Info/>
        </div>
        <footer className='footer'>
          <p>Siguenos en nuestras redes</p>
          <div>
          <a target='blank' href="https://www.facebook.com/?locale=es_LA"><img className='facebook' src={Facebook} alt="" /></a>
          <a target='blank' href="https://www.instagram.com/"><img className='instagram' src={Instagram} alt="" /></a>
          </div>
        </footer>
      </div>
    </>
  )
}

export default App
