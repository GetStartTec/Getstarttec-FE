import { BrowserRouter, Route, Routes } from "react-router-dom";
<<<<<<< HEAD
import { Header } from "./Component/Header/Header";
import { Contact } from "./Component/Contact/Contact";
import { Footer } from "./Component/Footer/Footer";
import { Home } from "./Component/Home/Home";
=======
import { Home } from "./Component/Home/Home";
import { About } from "./Component/About/About";
import { Services } from "./Component/Services/Services";
import { Projects } from "./Component/Projects/Projects";
import { Contact } from "./Component/Contact/Contact";
import { Header } from "./Component/Header/Header";
import { Footer } from "./Component/Footer/Footer";

>>>>>>> baf4f8e416eab811089cfa7f9ae8a912f8c4aaf2

function App() {
  return (
    <>
<<<<<<< HEAD
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>

=======
    <BrowserRouter>
    <Header></Header>
    <Routes>
      <Route
      path="/" element={<Home></Home>}>
      </Route>
      <Route
      path="/about-us" element={<About></About>}>
      </Route>
      <Route
      path="/services" element={<Services></Services>}>
      </Route>
      <Route
      path="/projects" element={<Projects></Projects>}>
      </Route>
      <Route
      path="/contact-us" element={<Contact></Contact>}>
      </Route>
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
>>>>>>> baf4f8e416eab811089cfa7f9ae8a912f8c4aaf2
    </>
  );
}

export default App;