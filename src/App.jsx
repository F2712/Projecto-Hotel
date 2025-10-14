import { useState } from 'react'
import { Info } from './componentes/Info'

import { Boton_cambia } from './componentes/boton_cambia'

import './App.css'
import Facebook from './assets/img/Facebook.png'
import Instagram from './assets/img/ig.png'


function App() {
  return (
    <>

      <div className="fondo">
        <h1 className='titulo'>Hotel Puras Maravillas</h1>
        <div className='hola'>
          <Boton_cambia dice='>' suma={1} max={20}/>
          <div className="fondo">
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
      </div>
    </>
  )
}

export default App
