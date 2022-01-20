import React from 'react';
import Header from '../template/Header';

import { Apiurl } from '../services/apirest';
import axios from 'axios';

class Dashboard extends React.Component{

    state={
        primaCobrar:[]

    }
    
    componentDidMount(){
        let url = Apiurl + "primaCobrar?id=1";
        axios.get(url)
        .then(response =>{
            this.setState({
                primaCobrar:response.data
            })
        })
    }

    render(){
        return(

            <React.Fragment>
                <Header></Header>
                <br/> <br/>
                <div className="contenedor">
                <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Oficina
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                </div>
                </div>

                <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Agente
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                </div>
                </div>

                <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Ejecutiva
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                </div>
                </div>

                </div>
                
                <div className="container">
                <table className="table table-hover">
                    <thead>
                        <tr>
                        <th scope="col">Fianza</th>
                        <th scope="col">Movomientos</th>
                        <th scope="col">Fiado</th>
                        <th scope="col">Antiguedad</th>
                        <th scope="col">Dias de vencimiento</th>
                        <th scope="col">Importe</th>    
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.primaCobrar.map((value, index)=>{
                            return(
                                <tr key = {index}>
                                    <td>{value.fianza}</td>
                                    <td>{value.movimiento}</td>
                                    <td>{value.fiado}</td>
                                    <td>{value.antiguedad}</td>
                                    <td>{value.vencimiento}</td>
                                    <td>{value.importe}</td>
                                </tr>  
                            )
                        })}
                        
                        
                    </tbody>
                </table>
                </div>


                <br/>
                <div className="container">
                <table className="table table-hover">
                    <thead>
                        <tr>
                        <th scope="col">Fianza</th>
                        <th scope="col">Movomientos</th>
                        <th scope="col">Fiado</th>
                        <th scope="col">Antiguedad</th>
                        <th scope="col">Dias de vencimiento</th>
                        <th scope="col">Importe</th>    
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.primaCobrar.map((value, index)=>{
                            return(
                                <tr key = {index}>
                                    <td>{value.fianza}</td>
                                    <td>{value.movimiento}</td>
                                    <td>{value.fiado}</td>
                                    <td>{value.antiguedad}</td>
                                    <td>{value.vencimiento}</td>
                                    <td>{value.importe}</td>
                                </tr>  
                            )
                        })}
                        
                        
                    </tbody>
                </table>
                </div>
            </React.Fragment>
          
        );

    }


}

export default Dashboard