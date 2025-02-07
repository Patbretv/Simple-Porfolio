import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <img src="/logo.png" className='w-12 h-12' alt="logo" />
      <span className="text-2xl font-bold text-white">Patbre</span>
    </div>
  );
};

export default Logo;