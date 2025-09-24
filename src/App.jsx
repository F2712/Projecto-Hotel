import { useState } from 'react'
import { Info } from './componentes/Info'
import { Boton_cambia } from './componentes/boton_cambia'

import './App.css'


function App() {
  return (
    <>

      <div className="fondo">
        <h1 className='titulo'>Hotel De Puras Maravillas</h1>
        <div className='hola'>

          <div className="fondo">
            <Info/>
          </div>
        <footer className='footer'>
          <p>Siguenos en nuestras redes</p>
        </footer>
        </div>
      </div>
    </>
  )
}

export default App
