import React from 'react'

const Score = ({label, value}) => {
  return (
    <div className='w-[100px]'>
      <h3 className='text-sm font-semibold text-green-100 text-center'>{label}</h3>
      <p className='text-3xl font-bold text-green-500 text-center'>{value}</p>
    </div>
  );
}

export default Score