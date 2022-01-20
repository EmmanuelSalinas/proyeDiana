//Importamos las librerias
import React from 'react';
import './assetss/css/App.css';
import 'bootstrap/dist/css/bootstrap.css';

//Importamos los Componentes
import Login from './components/Login';
import Dashboard from './components/Dashboard';

//Importamos Reac Router
import {BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

//Creamos las rutas
function App() {
  return (
   //Rutas
      <React.Fragment>
            <Router>
                <Routes>
                  
                  <Route path="/dashboard" element={<Dashboard />} />


                </Routes>

            </Router>
      </React.Fragment>


  );
}

export default App;
