import "./formularioa.css"

export function Formularioa({ onVolver }){
    return (
        <>
            <form className="comprar">
                <input placeholder="Nombre Completo" className="cuadro" id="nombre" type="text" required/>
                <input placeholder="Teléfono" className="cuadro" id="teléfono" type="tel" required/>
                <input placeholder="Tarjeta" className="cuadro" id="tarjeta" type="number" required/>

                <button className="botones" type="submit">LISTO</button>
                <button className="botones" onClick={onVolver}>SALIR</button>
            </form>
        </>
    )
}