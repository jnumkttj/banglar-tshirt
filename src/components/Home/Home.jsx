import React, { useState } from 'react';
import { useLoaderData, useSearchParams } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';

const Home = () => {

  const tshirts = useLoaderData();
  const [cart, setCart] = useState([]);

  const handleAddToCart = tshirt => {
    console.log(tshirt);
  }

  return (
    <div className='container mx-auto flex justify-between mt-5'>
        <div className='grid grid-cols-3 gap-5'>
        {
        tshirts.map(tshirt => <Tshirt key={tshirt._id} tshirt={tshirt} handleAddToCart={handleAddToCart}></Tshirt>)
        }
        </div>
        <div>
          <Cart></Cart>
        </div>

    </div>
    
    
  );
};

export default Home;