import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Dashboard from './Components/Dashboard.jsx';
import Header from './Components/Header/Header.jsx';
import Footer from './Components/Footer/Footer.jsx';
import CustomCursor from './Components/CustomCursor.jsx';
import Home from './Components/Home_GSAP.jsx';
import Contact from './Components/ContactUs.jsx/Contact.jsx';
import Services from './Components/Services/Services.jsx';
import Gallery from './Components/Gallery.jsx';
import About from './Components/About.jsx';
import Pack from './Components/Pack.jsx';
import NasikDhol from './Components/NasikDhol.jsx';
import OnlyDhol from './Components/OnlyDhol.jsx';
import PunjabiDhol from './Components/PunjabiDhol.jsx';
import BandMusicians from './Components/BandMusicians.jsx';
import BackPipe from './Components/BackPipe.jsx';
import RajisthaniBand from './Components/RajistaniBand.jsx';
import GhodiDecorated from './Components/GhodiDecorated.jsx';
import BuggiDecorated from './Components/BuggiDecorated.jsx';
import VintageCar from './Components/VintageCar.jsx';
import Palki from './Components/Palki.jsx';
import Chattar from './Components/Chattar.jsx';
import DjWells from './Components/DjWells.jsx';
import BackgroundMusicPlayer from './Components/BackgroundMusicPlayer.jsx';
import FloatingWhatsApp from './Components/FloatingWhatsApp .jsx';

// ScrollToTop Component - har route change par top pe scroll karega
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      {/* <CustomCursor/> */}
      <BrowserRouter>
        <ScrollToTop />
        <BackgroundMusicPlayer />
        <Header />

        {/* Global WhatsApp Enquiry Button (har page par fixed) */}
        <FloatingWhatsApp />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/About" element={<About />} />
          <Route path="/Pack" element={<Pack />} />
          <Route path="/NasikDhol" element={<NasikDhol />} />
          <Route path="/OnlyDhol" element={<OnlyDhol />} />
          <Route path="/PunjabiDhol" element={<PunjabiDhol />} />
          <Route path="/BandMusicians" element={<BandMusicians />} />
          <Route path="/Backpipe" element={<BackPipe />} />
          <Route path="/RajisthaniBand" element={<RajisthaniBand />} />
          <Route path="/GhodiDecorated" element={<GhodiDecorated />} />
          <Route path="/BuggiDecorated" element={<BuggiDecorated />} />
          <Route path="/VintageCar" element={<VintageCar />} />
          <Route path="/Palki&Doli" element={<Palki />} />
          <Route path="/Palki&Chattar" element={<Chattar />} />
          <Route path="/DjWells" element={<DjWells />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
