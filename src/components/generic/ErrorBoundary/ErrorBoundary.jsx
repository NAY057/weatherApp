// import { render } from '@testing-library/react'
import React, { Component } from 'react'

class ErrorBoundary extends Component{
    render(){               //con this estoy especificando que estoy por fuera del nivel de la funcion render
                            // y que estoy a nivel de la clase
        return <h1>Error Boundary {this.props.saludos}</h1>// asi se recive un parametro en un componente de tipo clase
        // <ErrorBoundary saludo='Hola!!'> asi se le pasaria un parametro a un componente de tipo clase
    }
}

export default ErrorBoundary