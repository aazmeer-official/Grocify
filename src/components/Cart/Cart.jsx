import React, { useState } from 'react';
import UtilityPage from '../utils/UtilityPage';
import NumberSpinner from './NumberSpinner';
import ButtonMain from '../utils/ButtonMain';

const Cart = () => {
  const [products, setProducts] = useState([
    { _id: 1, name: "Mango", price: 12, quantity: 8 },
    { _id: 2, name: "Apple", price: 12, quantity: 1 },
  ]);

  const handleQuantityChange = (index, val) => {
    const updatedProducts = [...products];
    updatedProducts[index] = { 
      ...updatedProducts[index], 
      quantity: Number(val) || 0 
    };
    setProducts(updatedProducts); 
  };

  const calculateTotal = () => {
    return products.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0);
  };

  return (
    <div>
        <UtilityPage orangePart="Cart" blackPart=" Page" />
        <div className='flex justify-center items-center mt-10'></div>
        
        <div className='container mx-auto w-full max-w-5xl'>
            <div className='flex bg-orange-500 p-5'>
                <div className='w-1/7 border-r text-xl font-bold'>Index</div>
                <div className='w-4/7 ml-5 border-r text-xl font-bold'>Title</div>
                <div className='w-2/7 ml-5 border-r text-xl font-bold'>Quantity</div>
                <div className='w-1/7 ml-5 text-xl font-bold'>Price</div>
            </div>
            
            {products.map((item, index) => (
                <div key={item._id}>
                    <div className='flex p-5 border-b'>
                        <div className='w-1/7 border-r text-xl font-bold'>{index + 1}</div>
                        <div className='w-4/7 ml-5 border-r text-xl font-bold'>{item.name}</div>
                        <div className='w-2/7 ml-5 border-r text-xl font-bold'>
                        <NumberSpinner
                            min={1}
                            max={40}
                            value={item.quantity} 
                            size="small"
                            onValueChange={(val) => handleQuantityChange(index, val)} // Add this for the + and - buttons
                            onChange={(event, val) => handleQuantityChange(index, val)} // Keep this for manual typing 
                        />
                        </div>
                        <div className='w-1/7 ml-5 text-xl font-bold'>${item.price * item.quantity}</div>
                    </div>
                </div>
            ))}
            
            <div className='p-5 text-right text-2xl font-bold mt-4'>
                Total: ${calculateTotal()}
            </div>
            <div className='p-5 flex justify-center text-2xl font-bold mt-4'>
                <ButtonMain text="Checkout" to="/checkout" />
            </div>
        </div>
    </div>
  );
}

export default Cart;