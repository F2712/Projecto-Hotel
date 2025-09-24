import { useState } from 'react'
import { Info } from './Info'

export function Boton_cambia({dice="?", suma=0, min=0, max=null, variab=null}){

    const [count, setCount] = useState(0)

    return (
        <>
            <button id="boton" onClick={() => {setCount(count+suma)}}>{count}</button>
        </>
    )
}