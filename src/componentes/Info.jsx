// Importaciones
import { useState } from 'react'
import habs from "../data/habitaciones.json";

export function Info(){
    // Numero de la habitación que se esté viendo en el momento
    const [actual, setActual] = useState(0)

    // Función para importar assets dinamicamente
    const AssetUrl = (name) => {
        return new URL(`../assets/img/${name}`, import.meta.url).href;
    }

    function agragar(suma){
        if (0 < actual < habs.length-1){
            setActual(actual+suma)
        }
    }

    // Código HTML
    return (
        <>
            <button id="botonAtr" onClick={() => {agragar(-1)}}>Atras</button>
            <button id="botonAdel" onClick={() => {agragar(1)}}>Adelante</button>

            <div className="info">
                <img id='foto' src={AssetUrl(habs[actual].Foto)} alt="foto" />
                <div className="demas">
                    <h2>{habs[actual].Nombre}</h2>
                    <p>{habs[actual].Info}</p>
                    <button>comprar</button>
                    <button>alquilar</button>
                </div>
            </div>
        </>
    )
}