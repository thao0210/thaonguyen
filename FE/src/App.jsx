import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import Pricing from './components/Pricing/Pricing';
import Process from './components/Process/Process';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Pricing />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;