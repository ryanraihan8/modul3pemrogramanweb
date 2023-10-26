import Navbar from "./Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import Hero from "./hero";
import Footer from "./footer";
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Routes>
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Menu" element={<Menu />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
