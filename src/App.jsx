import { useState } from 'react'
import { Info } from './componentes/Info'
import { Boton_cambia } from './componentes/boton_cambia'

function App() {
  return (
    <>
      <div className='hola'>
        <Boton_cambia dice='>' suma={1} max={20}/>
        <Info/>
      </div>
    </>
  )
}

export default App
