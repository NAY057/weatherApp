import React, { Component } from 'react'

class ErrorBoundary extends Component{
    // para user el estado en un componente de clase se debe de inicializar en el constructor
    constructor(props){
        super(props) //este es el super contructor el cual nos ayuda a tener alcance a que las propiedades lleguen
                    //al componente de orden superior osea Component (linea 3)
        this.state = { //iniciando el estado..
            hasError:true
            // la diferencia estre un estado y una propiedad es:
            // el estado puede ser cambiado por un componente
            // las propiedades no pueden ser cambiadas por un componente
        }
    }

    componentDidCatch(error , errorInfo){//recive dos parametros uno es el error y errorinfo
        //este es un metodo que si es instancia de la clase, osea que se puede usar el this
        console.log('error: ', errorInfo)
    }
    static getDerivedStatedFromError(error){
        // este es un metodo que NO ES instancia de la clase, osea que NO SE puede usar el this
        return{hasError: true}
    }

    render(){              
        return (
            this.state.hasError ?
            (<h1>Hubo un error</h1>)
            :
            (this.props.children)
        )
        
    }
}

export default ErrorBoundary