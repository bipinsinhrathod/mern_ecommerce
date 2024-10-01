import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../customer/Pages/HomePage/HomePage'
import CartItems from '../customer/Components/Cart/CartItems'
import Navigetion from '../customer/Components/Navigetion/Navigetion'
import Footer from '../customer/Components/Footer/Footer'
import Product from '../customer/Components/Product/Product'
import ProductDetails from '../customer/Components/ProductDetails/ProductDetails'
import Cart from '../customer/Components/Cart/Cart'
import Checkout from '../customer/Components/Checkout/Checkout'
import Order from '../customer/Components/Order/Order'
import OrderDetails from '../customer/Components/Order/OrderDetails'

const CustomerRouters = () => {
  return (
    <div>
      <div>
      <Navigetion/>

      </div>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/:lavelOne/:lavelTwo/:lavelThre' element={<Product/>}></Route>
        <Route path='/:product/:productId' element={<ProductDetails/>}></Route>
        <Route path='/checkout' element={<Checkout/>}></Route>
        <Route path='/account/order' element={<Order/>}></Route>
        <Route path='/account/order/:orderId' element={<OrderDetails/>}></Route>
      </Routes>

      <div>
      <Footer/>

      </div>
    </div>
  )
}

export default CustomerRouters
