import NotMatch from "./components/error404/NotMatch";
import Contact from "./components/pages/Contact";
import Create from "./components/pages/Create";
import Details from "./components/pages/Details";
import Edit from "./components/pages/Edit";
import Home from "./components/pages/Home";
import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/:id" element={<Details />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotMatch />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
