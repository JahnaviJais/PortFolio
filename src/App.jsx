import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Education,
  Hero,
  Navbar,
  StarsCanvas,
  Tech,
  Works,
  Footer,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>

        <section id="about" className="scroll-mt-10">
          <About />
        </section>
        <section id="education" className="scroll-mt-10">
          <Education />
        </section>

        <Tech />

        <section id="work" className="scroll-mt-10">
          <Works />
        </section>
        <div className="relative z-0">
          <section id="contact">
            <Contact />
          </section>
          <StarsCanvas />
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  );
};

export default App;
