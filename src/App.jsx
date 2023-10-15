
import "./app.scss";
import Contact from "./componnts/contact/Contact";
import Cursor from "./componnts/cursor/Cursor";
import Hero from "./componnts/hero/Hero";
import Navbar from "./componnts/navbar/Navbar";
import Parallax from "./componnts/parallax/Parallax";
import Portfolio from "./componnts/portfolio/Portfolio";
import Services from "./componnts/services/Services";

const App = () => {
  return (
    <div>
      <Cursor />
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact />xxxxxxx
      </section>
      {/* Framer Motion Crash Course */}
      {/* <Test/>
    <Test/> */}
    </div>
  );
};

export default App;