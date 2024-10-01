import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import Cart from '../Cart/Cart'
import CartItems from '../Cart/CartItems'

const OrderSummary = () => {
  return (
    <div>
      <div className="p-5 shadow-lg rounded-s-md border ">
        <AddressCard/>
      </div>

      {/* <Cart/> */}

      <div className="mt-5">
      <div className="lg:grid grid-cols-3  relative">
        <div className="col-span-2">
          {[1,1,1,1,1].map((item)=><CartItems />)}
        </div>
        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className="border">
            <p className="uppercase font-bold opacity-60 pb-4">Price Details</p>
            <hr />
            <div className="space-y-3 font-semibold">
              <div className="flex justify-between pt-3 text-black">
                <span>Price</span>
                <span>₹4569</span>
              </div>
              <div className="flex justify-between pt-3 ">
                <span>Discount</span>
                <span className="text-green-600">₹-300</span>
              </div>
              <div className="flex justify-between pt-3 ">
                <span>Delivery Charges</span>
                <span className="text-green-600">Free</span>
              </div>
              <div className="flex justify-between pt-3  font-bold">
                <span>Total Ammount</span>
                <span className="text-green-600">₹4269</span>
              </div>
            </div>

            <button
                  type="submit"
                  className="mt-5 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Check Out
                </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default OrderSummary
