import { useState } from 'react'
// import { useRef, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom'

import { Info } from './componentes/Info'
import { Formulario } from './componentes/formulario'
import { Formularioa } from './componentes/formularioa'
import logo from './assets/img/logo.png'

import './App.css'
import Facebook from './assets/img/Facebook.png'
import Instagram from './assets/img/ig.png'


function App() {

  /*const Acciones = () => {
    useEffect(() => {
      const clickCompra = () => {
        console.log("Hola")
      }

      const compra = document.getElementById("compra")
      const alquiler = document.getElementById("alquiler")


      compra.addEventListener('click', clickCompra)
    }, [])
  }*/

  const [mostrarAlquilar, setMostrarAlquilar] = useState(false);
  const [mostrarCompra, setMostrarCompra] = useState(false);

  const AlquilarClick = () => {
    if (!mostrarAlquilar){
      setMostrarAlquilar(true);
    } else {
      setMostrarAlquilar(false);
    }
  };

  const ComprarClick = () => {
    if (!mostrarCompra){
      setMostrarCompra(true);
    } else {
      setMostrarCompra(false);
    }
  };

  return (
    <>    
      <BrowserRouter>
        <div className='todo'>
          <img src={logo} id='logo'/>
          <div className='importante'>
            {mostrarAlquilar ? (
              <>
                <Formulario onVolver={AlquilarClick}/>
              </>
              ) : mostrarCompra ? (
                <>
                  <Formularioa onVolver={ComprarClick}/>
                </>
              ) : (
                <>
                  <Info onAlquilar={AlquilarClick} onComprar={ComprarClick}/>
                </>
              )
            }
          </div>
          <footer className='footer'>
            <p>Siguenos en nuestras redes</p>
            <div>
            <a target='blank' href="https://www.facebook.com/?locale=es_LA"><img className='facebook' src={Facebook} alt="" /></a>
            <a target='blank' href="https://www.instagram.com/"><img className='instagram' src={Instagram} alt="" /></a>
            </div>
          </footer>
        </div>
      </BrowserRouter>  

    </>
  )
}

export default App
