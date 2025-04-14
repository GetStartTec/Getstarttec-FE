// App.js
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./Component/Header/Header";
import { Footer } from "./Component/Footer/Footer";
import { Loader } from "./Component/Loader/Loder";
import { Home } from "./Component/Home/Home";
import { About } from "./Component/About/About";
import { Services } from "./Component/Services/Services";
import { Projects } from "./Component/Projects/Projects";
import { Contact } from "./Component/Contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Loader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
