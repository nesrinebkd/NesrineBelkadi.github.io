
import './App.css';
import Home from './portfolioContainer/Home/Home'
import AboutMe from './portfolioContainer/AboutMe/AboutMe';
import Resume from './portfolioContainer/Resume/Resume';
import ContactMe from './portfolioContainer/ContactMe/ContactMe';
import Footer from './portfolioContainer/Footer/Footer';
import { Element } from "react-scroll";
function App() {
  return (
    <div className="App">
      <Element name="Home">
        <Home />
      </Element>
     
      <Element name="AboutMe">
        <AboutMe />
      </Element>

      <Element name="Resume">
        <Resume />
      </Element>
     
      <Element name="ContactMe">
        <ContactMe />
      </Element>
     
      <Element name="Footer">
        <Footer />
      </Element>
    
    </div>
  );
}

export default App;
