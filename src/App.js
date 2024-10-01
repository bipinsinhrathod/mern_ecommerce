import './App.css';
import Navigetion from './customer/Components/Navigetion/Navigetion';
import HomePage from './customer/Pages/HomePage/HomePage';
import Footer from './customer/Components/Footer/Footer';
import Product from './customer/Components/Product/Product';
import ProductDetails from './customer/Components/ProductDetails/ProductDetails';
import Cart from './customer/Components/Cart/Cart';
import Checkout from './customer/Components/Checkout/Checkout';
import Order from './customer/Components/Order/Order';
import OrderDetails from './customer/Components/Order/OrderDetails';
import { Route, Routes } from 'react-router-dom';
import CustomerRouters from './Routes/CustomerRouters';




function App() {
  return (
    <div className="">

      <Routes>
        <Route path='/*' element={<CustomerRouters/>}></Route>
      </Routes>



      {/* <HomePage/>  */}
      {/* <Product/> */}
      {/* <ProductDetails/> */}
      {/* <Cart/> */}
      {/* <Checkout/> */}
      {/* <Order/> */}
      {/* <OrderDetails/> */}
    </div>
  );
}

export default App;
