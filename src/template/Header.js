import  React  from 'react';

class Header extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-dark bg-dark">
                 <a className="navbar-brand" href="#">
                        <h1> Prima por Cobrar </h1>
                </a>
            </nav>
        );
    }
}

export default Header