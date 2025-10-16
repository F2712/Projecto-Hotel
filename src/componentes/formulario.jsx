import "./formulario.css"

export function Formulario({ onVolver }){
    return (
        <>
            <form className="alquilar">
                <input placeholder="Nombre Completo" className="cuadro" id="nombre" type="text" required/>
                <input placeholder="Teléfono" className="cuadro" id="teléfono" type="tel" required/>
                <input placeholder="Número tarjeta" className="cuadro" id="tarjeta" type="number" required/>
                <input placeholder="Personas" className="cuadro" id="personas" type="number" required/>
                <input placeholder="Inicio estadía" className="cuadro" id="inicio" type="date" required/>
                <input placeholder="Fin estadía" className="cuadro" id="final" type="date" required/>

                <button className="botones" type="submit">LISTO</button>
                <button className="botones" onClick={onVolver}>SALIR</button>
            </form>
        </>
    )
}