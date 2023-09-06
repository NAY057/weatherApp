import React, { Component } from 'react'

class ErrorBoundary extends Component{
    // para user el estado en un componente de clase se debe de inicializar en el constructor
    constructor(props){
        super(props) //este es el super contructor el cual nos ayuda a tener alcance a que las propiedades lleguen
                    //al componente de orden superior osea Component (linea 3)
        this.state = { //iniciando el estado..
            activo:true
            // la diferencia estre un estado y una propiedad es:
            // el estado puede ser cambiado por un componente
            // las propiedades no pueden ser cambiadas por un componente
        }
    }
    estaActivo = () => {
        // return this.props.activo ? "Activo" : "No activo" ANTES
        return this.state.activo ? "Activo" : "No activo" //AHORA CON ESTADO
    }
    render(){              
        return (
        <h1>Error Boundary {this.props.saludos} 
        {
        this.estaActivo()
        //aqui se llama la funcion estaActivo
        //el parametro que se le pasa a la funcion es un boleano y seria asi:  <ErrorBoundary saludo='Hola!!' >
        }

        
        </h1>
        )
        
    }
}

export default ErrorBoundary