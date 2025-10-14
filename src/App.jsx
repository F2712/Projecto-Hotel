import { useState } from 'react'
import { Info } from './componentes/Info'
import { Formulario } from './componentes/formulario'
import logo from './assets/img/logo.png'

import './App.css'


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
        </footer>
      </div>
    </>
  )
}

export default App
