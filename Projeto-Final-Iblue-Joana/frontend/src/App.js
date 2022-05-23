import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes,} from 'react-router-dom';
import store from '../src/store/';
import Display from './components/Display';
import Page2 from './components/Pages/Page2';
import { Provider } from 'react-redux';
import Login from './view/login';
import NovoUsuario from './view/usuario-novo';
import Perfil from './view/usuario-logado';
import Fundamental2 from './view/calculadora-F2';
import Fundamental1 from './view/calculadora-F1';
import UsuarioRecuperarSenha from './view/recuperar-senha';



function App(){
  const [value, setValue] = useState("");

  return(
    <div className='App'>
      <div className='display_app'>
      <Provider store={store}>
      <Router>
    <div className="App">
      <Routes>
      <Route path="/page"  element={<Page2/>} />
      <Route path="/users"  element={<Display value={value} setValue={setValue} />} />
      <Route path='/' element = {<Login/>} />
     <Route path='/novousuario' element={<NovoUsuario/>} />
     <Route path='/fundamental:parametro' element={<Perfil/>} />
     <Route path='/calculadora-fundamental-1' element={<Fundamental1/>} />
     <Route path='/calculadora-fundamental-2' element={<Fundamental2/>} />
     <Route path='/recuperar-senha' element={<UsuarioRecuperarSenha/>} />
      </Routes>
    </div>
    </Router>
    </Provider>  
      </div>
    </div>
    
  )
}


export default App;
