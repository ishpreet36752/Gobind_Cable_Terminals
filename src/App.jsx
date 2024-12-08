import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Applications from "./pages/Applications";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import useTopScroll from "./hooks/useTopScroll";
import WhatsappButton from "./components/WhatsappButton";

function App() {
  return (
    <Router>
      <ScrollHandler />
      <div className="min-h-screen bg-white">
        <Header />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/applications" element={<Applications />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <div className="fixed md:hidden bottom-10 right-4 z-50 bg-white rounded-xl shadow-lg ">
          <WhatsappButton />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

const ScrollHandler = () => {
  useTopScroll(); // Use the custom hook here
  return null;
};

export default App;
