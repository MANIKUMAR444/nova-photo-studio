import "./App.css";
import PhotographerLogin from "./pages/PhotographerLogin";
import PhotographerRegister from "./pages/PhotographerRegister";
import ClientLogin from "./pages/ClientLogin";
import ClientRegister from "./pages/ClientRegister";
import PhotographerDashboard from "./pages/PhotographerDashboard";
import CreateGallery from "./pages/CreateGallery";
import GalleryCreated from "./pages/GalleryCreated";
import UploadPhotos from "./pages/UploadPhotos";
import ClientGallery from "./pages/ClientGallery";

import { BrowserRouter, Routes, Route } from "react-router-dom";



import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Portal from "./pages/Portal";
import ClientDashboard from "./pages/ClientDashboard";

function App() {
  return (
    <BrowserRouter>

      

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/services" element={<Services />} />

        <Route path="/gallery" element={<Gallery />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/portal" element={<Portal />} />

        <Route
  path="/photographer-login"
  element={<PhotographerLogin />}
/>

        <Route
  path="/photographer-register"
  element={<PhotographerRegister />}
/>

        <Route
  path="/client-login"
  element={<ClientLogin />}
/>

        <Route
  path="/client-register"
  element={<ClientRegister />}
/>

        <Route
  path="/photographer-dashboard"
  element={<PhotographerDashboard />}
/>

        <Route
  path="/create-gallery"
  element={<CreateGallery />}
/>

        <Route
  path="/gallery-created"
  element={<GalleryCreated />}
/>

<Route
  path="/upload-photos"
  element={<UploadPhotos />}
/>


<Route
  path="/client-gallery"
  element={<ClientGallery />}
/>

<Route
  path="/client-dashboard"
  element={<ClientDashboard />}
/>

      </Routes>

    </BrowserRouter>
  );
}

export default App;