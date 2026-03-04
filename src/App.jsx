import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
// Routes are now managed via hash-scroll in Home.jsx, keeping only Home and Products
import Home from "./pages/Home";
import Products from "./pages/Products";
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
            <Route path="/products" element={<Products />} />
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
