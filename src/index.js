import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'
const App = () =>{

    const elem = ()=> {
        const styleElem1= {
                margin:'auto',
                width:768,
                backgroudColor: '#EEE',
                padding:12,
                borderRadius:8,
                textAlign: 'center'
        }
        return styleElem1
    }

    return(
    <div style={elem()}>
        <h3>Profissionais de Saude</h3>
        
        <div style={{       
            margin:'auto',
            width:768,
            backgroudColor: '#EEE',
            padding:12,
            borderRadius:8       
        }}>
            <div style={{
            margin:'auto',
            width:'768',
            backgroundColor: '#EEE',
            padding: 12,
            borderRadius:8,
            }}>
                <div className='banner'>
                    
                </div>
                <div className='banner'></div>
                <div className='banner'></div>
            </div>
        </div>
    </div>
    )
}

ReactDOM.render(
    <App/>, document.querySelector("#root")
)
