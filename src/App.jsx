import { useState } from 'react'
import { Info } from './componentes/Info'
import { Boton_cambia } from './componentes/boton_cambia'

import './App.css'


function App() {
  return (
    <>      
      <div className='todo'>
        <h1 className='titulo'>Hotel De Puras Maravillas</h1>
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
