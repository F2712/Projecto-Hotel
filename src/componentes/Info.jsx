// Importaciones
import { useState } from 'react'
import { useNavigate, Link } from "react-router-dom"

import habs from "../data/habitaciones.json";
import "./info.css"

import botAtras from '../assets/img/atras.png'
import botAdelante from '../assets/img/adelante.png'

export function Info({ onAlquilar, onComprar }){
    // Numero de la habitación que se esté viendo en el momento
    const [actual, setActual] = useState(0)

    const navegar = useNavigate()

    // Función para importar assets dinamicamente
    const AssetUrl = (name) => {
        return new URL(`../assets/img/${name}`, import.meta.url).href;
    }

    function adelante(){
        if (actual < habs.length-1){
            setActual(actual+1)
        } else {
            setActual(0)
        } 
    }

    function atras(){
        if (actual > 0){
            setActual(actual-1)
        } else {
            setActual(habs.length-1)
        }
    }

    // Código HTML
    return (
        <>
            <button className="cambios" onClick={() => {atras()}}>
                <img src={botAtras}/>
            </button>

            <div className="info">
                <img id='foto' src={AssetUrl(habs[actual].Foto)} alt="foto" />
                <div className="demas">
                    <h2 className="aah">{habs[actual].Nombre}</h2>
                    <p className='texto'>{habs[actual].Info}</p>
                    <p id='precio'>${habs[actual].Precio}</p>
                    <button className="botones" id='compra' onClick={onComprar}>COMPRAR</button>
                    <button className="botones" id='alquiler' onClick={onAlquilar}>ALQUILAR</button>                  
                </div>
            </div>

            <button className="cambios" onClick={() => {adelante()}}>
                <img src={botAdelante}/>
            </button>
        </>
    )
}