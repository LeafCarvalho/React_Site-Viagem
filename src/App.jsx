import ReactDOM from 'react-dom';
//HOOKS
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//CSS
import './Global.css'

//PAGES
import { Home } from './Pages/Home/Home';
import { Contact } from './Pages/Contact/Contact';
import { BeloHorizonte } from './Pages/Cities/belohorizonte';

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/mg/belohorizonte' element={<BeloHorizonte />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}