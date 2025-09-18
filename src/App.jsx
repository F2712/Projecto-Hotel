import { useState } from 'react'
import { Info } from './componentes/Info'

import { Boton_cambia } from './componentes/boton_cambia'

import './App.css'


function App() {
  return (
    <>

      <div className="fondo">
        <div className='hola'>
          <Boton_cambia dice='>' suma={1} max={20}/>
          <div className="fondo">
            <Info/>
            <p>hola</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
