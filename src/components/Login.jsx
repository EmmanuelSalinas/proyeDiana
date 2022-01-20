import React from 'react';
//Import css
import '../assetss/css/Login.css';
//imagenes
import user from '../assetss/css/img/user.png';
//servicios
import {Apiurl} from '../services/apirest';
//librerias
import axios from 'axios';


class Login extends React.Component{

state={
    form:{
        "usuario":"",
        "password":""
    },
    error:false,
    errorMsg:""
}
   

    manejadorSubmit =e=>{
        e.preventDefault();
    }

    manejadorChange = async e=>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]:e.target.value
            }
        })
    }

    manejadorBoton=()=>{
        let url = Apiurl + 'aunth';
        axios.post(url,this.state.form)
        .then( response =>{
            console.log(response);
        })
    }

    render(){
        return(

            <React.Fragment>
                <div className="wrapper fadeInDown">
                    <div id="formContent">
                      
                        <div className="fadeIn first">
                            <br/> <br/>
                        <img src={user} width="100px" alt="User Icon" />
                        <br/>  <br/>
                        </div>

                        <form onSubmit={this.manejadorSubmit}>
                        <input type="text"  className="fadeIn second" name="usuario" placeholder="Usuario" onChange={this.manejadorChange}/>
                        <input type="password"  className="fadeIn third" name="password" placeholder="password" onChange={this.manejadorChange} />
                        <input type="submit" className="fadeIn fourth" value="Log In" onClick={this.manejadorBoton}/>
                        </form>

                        <div id="formFooter">
                        
                        </div>

                    </div>
                </div>
            </React.Fragment>
            
        );

    }


}

export default Login