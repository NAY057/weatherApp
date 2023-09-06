import React, { Component } from 'react'

class ErrorBoundary extends Component{
    // las funciones de se declaran aqui.. a nivel de la clase
    estaActivo = () => {
        return this.props.activo ? "Activo" : "No activo"
    }
    onclickHandler = () => {
        this.setState({activo:true})// por medio de la funcion setState se altera el estado
        //se le debe de pasar un objeto al setState con lo que se quiere cambiar
    }
    componentDidMount(){
        console.log('El componente se ha montado')//se ejecuta tan pronto el componente se haya montado
    }
    componentDidUpdate(prevProps, prevState){ //los parametros que se reciven aqui contiene los props anteriores y tambien el esto anterior
        console.log(`estado previo: ${prevState.activo} - estado actual: ${this.state.activo}`)
        console.log('El componente se actualizo')
    }
    componentWillUnmount(){
        console.log('El componente se ha desmontado')
    }
    render(){              
        return (
        <div>
            <button onClick={this.onclickHandler}>Activar</button>
            <h1>Error Boundary {this.props.saludos} 
            {
                this.estaActivo()
            //aqui se llama la funcion estaActivo
            //el parametro que se le pasa a la funcion es un boleano y seria asi:  <ErrorBoundary saludo='Hola!!' activo={true}>
            }

            
            </h1>
        </div>
        )
        
    }
}

export default ErrorBoundary