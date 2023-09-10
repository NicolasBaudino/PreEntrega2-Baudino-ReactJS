import { BrowserRouter, Routes, Route } from 'react-router-dom';
// COMPONENTES
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
// CSS
// import './App.css'
// BOOSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {

  return (
      <BrowserRouter>
          <NavBar />
          {/* <Routes>
            <Route path='/' element={<ItemListContainer greeting="Electronics"/>}/>
            <Route path='/detalle' element={<ItemDetailContainer/>}/>
            
          </Routes> */}
          <ItemListContainer/>
          <ItemDetailContainer/>

      </BrowserRouter>
	)
}

export default App
