import ReactDOM from 'react-dom';
//HOOKS
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//CSS
import './Global.css'

//PAGES
import { Home } from './Pages/Home/Home';
import { About } from './Pages/About/About';
import { Contact } from './Pages/Contact/Contact';

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}