import ReactDOM from 'react-dom';
//HOOKS
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//CSS
import './Global.css'

//PAGES
import { Home } from './Pages/Home/Home';
import { Contact } from './Pages/Contact/Contact';
import { Cities } from './Pages/Cities/Cities';
import { AddCity } from './Pages/AddCity/AddCity';

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="cities" element={<Cities />}/>
        <Route path="cities/adicionar-post" element={<AddCity />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}
