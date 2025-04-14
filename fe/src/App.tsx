import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Component/Home/Home";
import { About } from "./Component/About/About";
import { Services } from "./Component/Services/Services";
import { Projects } from "./Component/Projects/Projects";
import { Contact } from "./Component/Contact/Contact";
import { Header } from "./Component/Header/Header";
import { Footer } from "./Component/Footer/Footer";
import { Loader } from "./Component/Loader/Loder";


function App() {
  return (
    <>
    <BrowserRouter>
    <Header></Header>
    <Loader></Loader>
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
    </>
  );
}

export default App;
