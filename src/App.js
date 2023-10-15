import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/nav/Navbar';
import Product from './components/product/Product';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Product/>
      <Footer/>
    </div>
  );
}

export default App;
