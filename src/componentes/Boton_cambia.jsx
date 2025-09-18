export function Boton_cambia({dice="?", suma=0, max=null}){
    const Suma = (valor) => {
        if (valor < max){
            valor++;
        }
        console.log(valor);
    }

    const boton = document.getElementById("boton");

    return (
        <>
            <button id="boton">{dice}</button>
        </>
    )
}