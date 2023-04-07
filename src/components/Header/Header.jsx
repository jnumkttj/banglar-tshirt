import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className='container flex items-center justify-between mx-auto bg-slate-200 px-8 py-8 shadow-xl'>
      <h2 className='text-2xl font-semibold'><span className='text-orange-700'>Banglar</span> Tshirt</h2>
      <div className='text-md font-semibold'>
        <Link className='px-4' to={'/'}>Home</Link>
        <Link className='px-4' to={'/orders'}>Orders</Link>
      </div>
    </nav>
  );
};

export default Header;