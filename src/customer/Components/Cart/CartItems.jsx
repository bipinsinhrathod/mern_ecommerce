import { Button, IconButton } from "@mui/material";
import React from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
const CartItems = () => {
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src="https://th.bing.com/th/id/R.ebccd66b27e17afb572c7d36b95b266e?rik=%2bpELDLJAJDzgog&riu=http%3a%2f%2fcdn.shopify.com%2fs%2ffiles%2f1%2f0577%2f6945%2f9877%2fproducts%2f1615368136-74680400.jpg%3fv%3d1633346469&ehk=XdpFRsOflUJwudGlmfIp%2b12lhZwQyD2%2f%2fLT1yC3blr4%3d&risl=&pid=ImgRaw&r=0"
            alt=""
          />
        </div>

        <div className="ml-5 space-y-1">
          <p className="font-semibold">Men Slim Mid Rise Black Pant</p>
          <p className="opacity-70">Size: L,White</p>
          <p className="opacity-70 mt-2">Seller: Bipinhsinh Rathod</p>

          <div className="flex space-x-5 items-center text-gray-900 pt-6">
            <p className="font-semibold">₹199</p>
            <p className="opacity-50 line-through">₹211</p>
            <p className="text-green-600 font-semibold">5%off</p>
          </div>
        </div>
      </div>
      <div className="lg:flex items-center lg:space-x-10 pt-4 ">
        <div className="flex items-center space-x-2">
          <IconButton sx={{color:"red"}}>
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className="py-1 px-7 border rounded-sm">3</span>
            <IconButton sx={{color:"green"}}>
              <AddCircleOutlineIcon />
            </IconButton>
          
        </div>
        <div>
          <Button sx={{color:"red"}}>Remove</Button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
