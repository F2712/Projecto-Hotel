// Json con la información de las habitaciones
import habs from "../data/habitaciones.json";
import "./info.css"

// Numero de la habitación que se esté viendo en el momento
let actual = 2;

export function Info(){

    // Función para importar assets dinamicamente
    const AssetUrl = (name) => {
        return new URL(`../assets/img/${name}`, import.meta.url).href;
    }

    // Código HTML
    return (
        <>
            <div className="info">
                <img id='foto' src={AssetUrl(habs[actual].Foto)} alt="foto" />
                <div className="demas">
                    <h2 className="aah">{habs[actual].Nombre}</h2>
                    <p>{habs[actual].Info}</p>
                    <button className="botones">COMPRAR</button>
                    <button className="botones">ALQUILAR</button>                  
                </div>
            </div>
        </>
    )
}