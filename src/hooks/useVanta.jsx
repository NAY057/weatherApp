import{useEffect, useState, useRef} from 'react';
import Clouds from 'vanta/dist/vanta.clouds.min'
import * as THREE from 'three'

const useVanta = () => {
    const myRefDiv = useRef(null)
    const [vanta, setVanta] = useState(0)
    useEffect(() => {
        // console.log('myrefdiv.current (en UseEffect)', myRefDiv.current)
        // vanta != 0, es diferente de falso 
        if (!vanta){ 
            setVanta(Clouds({
                THREE,
                el: myRefDiv.current //el = elemento
            })) 
            // esto se ejecutara solo si algo cambia en la funcion de callback(esta misma donde estamos).
            // al salir de la pantalla se debe detener el effecto(des.asociar todos los recursos'div+ vanta effect')
            // console.log('establezco vanta a un valor diferente a 0')

            return() => { // aqui se detiene el effecto
                if(vanta){
                    vanta.destroy()
                    // console.log('libero los recursos')
                }
            }
        }
    }, [vanta]) // se pasa un segundo parametro de tipo lista(array de dependencias) con el motivo de mejorar el permormance si tuvieramos mas variables en uso dentro de useeffect se deben de agregar

    return myRefDiv
}

export default useVanta