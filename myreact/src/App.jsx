import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DesignCards from './components/DesignCards';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import BottomBar from './components/BottomBar';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <DesignCards />
      <Newsletter />
      <Footer />
      <BottomBar />
    </div>
  );
}

export default App;
