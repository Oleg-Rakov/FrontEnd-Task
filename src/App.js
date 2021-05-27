import './App.css';
import Footer from './components/Footer';
import Form from './components/Form';
import Header from './components/Header';
import Promo from './components/Promo';
import Sliders from './components/Slider';

function App() {
  return (
    <div>
      <Header />
      <Promo />
      <Sliders />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
