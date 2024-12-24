import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Html from './Components/Html';
import Css from './Components/Css';
import Javascript from './Components/Javascript';
import React from './Components/React';
import Sass from './Components/Sass';
import Sobre from './Components/Sobre';
import StyledComponents from './Components/StyledComponents';
import VueJs from './Components/VueJs';
import AulasHtmlRoutes from './Routes/HTML/AulasHtmlRoutes';
import './Global.scss';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/html" element={<Html />} />
        <Route path="/css" element={<Css />} />
        <Route path="/sass" element={<Sass />} />
        <Route path="/javascript" element={<Javascript />} />
        <Route path="/react" element={<React />} />
        <Route path="/styled" element={<StyledComponents />} />
        <Route path="/vue" element={<VueJs />} />
        <Route path="/sobre" element={<Sobre />} />
        {/* Rotas específicas das aulas */}
        <Route path="/*" element={<AulasHtmlRoutes />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
