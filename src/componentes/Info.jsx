import imag from "../assets/img/placeholder1.png";

export function Info(){
    return (
        <>
            <div className="info">
                <img src={imag}/>
                <div className="demas">
                    <p>información</p>
                    <button>comprar</button>
                    <button>alquilar</button>
                </div>
            </div>
        </>
    )
}