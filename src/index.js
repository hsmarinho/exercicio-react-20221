import React from 'react'
import ReactDOM from 'react-dom'

const App = () =>{
    const elem1 = ()=> {
        return (
            {  margin:'auto',
                    width:'768',
                    backgroudColor: '#EEE',
                    padding:12,
                    borderRadius:8
            }
        )
    }

    return(
    <div style={elem1}>
        <h3 >Profissionais de Saude</h3>
        <div></div>
    </div>
    )
}

ReactDOM.render(
    <App/>, document.querySelector("#root")
)
