import Home from "./Components/home/Home";
import Nav from "./Components/header/Nav";
import About from "./Components/about/About";
import Skills from "./Components/skills/Skills";
import Service from "./Components/Services/Service";
import Portfolio from "./Components/projects/Projects";
import Contact from "./Components/contact/Contact";
import Footer from "./Components/Footer/Footer";
import ScrollUp from "./Components/scrollup/ScrollUp";


function App() {
  return (
    <>
      <Nav />
      <main>
        <Home />
        <About />
        <Skills />
        <Service />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
