// Importaciones
import { useState } from 'react'
import habs from "../data/habitaciones.json";
import "./info.css"

export function Info(){
    // Numero de la habitación que se esté viendo en el momento
    const [actual, setActual] = useState(0)

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
            <button id="botonAtr" onClick={() => {atras()}}>{actual}</button>

            <div className="info">
                <img id='foto' src={AssetUrl(habs[actual].Foto)} alt="foto" />
                <div className="demas">
                    <h2 className="aah">{habs[actual].Nombre}</h2>
                    <p id='texto'>{habs[actual].Info}</p>
                    <button className="botones">COMPRAR</button>
                    <button className="botones">ALQUILAR</button>                  
                </div>
            </div>

            <button id="botonAdel" onClick={() => {adelante()}}>{actual}</button>
        </>
    )
}