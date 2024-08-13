import './App.css';
import Navigetion from './customer/Components/Navigetion/Navigetion';
import HomePage from './customer/Pages/HomePage/HomePage';
import Footer from './customer/Components/Footer/Footer';
import Product from './customer/Components/Product/Product';


function App() {
  return (
    <div className="">
      <Navigetion/>
      {/* <HomePage/>  */}
      <Product/>
      <Footer/>
    </div>
  );
}

export default App;
