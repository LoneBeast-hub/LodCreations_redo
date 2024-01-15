import About from "./components/about/about";
import Header from "./components/header/header";
import Nav from "./components/nav/nav.jsx";
import Experience from "./components/experience/experience";
import Services from "./components/services/services";
import Portfolio from "./components/portfolio/portfolio";
import Testimonials from "./components/testimonials/testimonials.jsx";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";

const App = () => {
  return(
    <div>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;