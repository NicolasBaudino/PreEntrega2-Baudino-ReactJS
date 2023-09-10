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
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/category/:cid' element={<ItemListContainer/>}/>
            <Route path='/detalle/:pid' element={<ItemDetailContainer/>}/>
          </Routes>
      </BrowserRouter>
	)
}

export default App
