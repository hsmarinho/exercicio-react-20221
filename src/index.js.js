import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'

const App = () => {

    const estiloBotao = {
                            marginTop: 12, 
                            paddingTop: 8, 
                            paddingBottom: 8, 
                            backgroundColor:'blueviolet', 
                            color: 'white', 
                            border: 'none', 
                            width: '100%', 
                            borderRadius: 8
                        };
    const textoDoRotulo = "Nome: ";
    const obterTextoDoBotao = () =>{
        return "Enviar";
    }

    return (
        <div style={{
            margin:'auto',
            width:'768',
            backgroundColor: '#EEE',
            padding: 12,
            borderRadius:8,
            }}>

            <label className='rotulo' htmlFor="nome" style={{
                display:'block',
                marginBotton:8,
            }}>{textoDoRotulo}</label>

            <input type="text" id="name" style={{
                paddingTop:8,
                paddingBotton:8,
                borderStyle:'hidden',
                width:'100%',
                borderRadius:8,
                outline:'none',
                boxSize:'borderbox'
            }}/>

            <button style={estiloBotao}>{obterTextoDoBotao()}</button>

        </div>
    )
}

ReactDOM.render(
    <App />,document.querySelector("#root")
)