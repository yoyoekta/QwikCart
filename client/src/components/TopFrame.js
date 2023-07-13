import React from 'react'
import img from '../images/topframe1.jpg'

const TopFrame = () => {
  return (
    <div>
      <div className='m-10'>
        <div className='flex flex-row justify-center mt-12 p-8'>
          <div className='flex-1 flex flex-col justify-center items-start m-5'>
            <h3 className='text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-black to-slate-400'>Pick best deals</h3>
            <p className='text-xl font-medium text-slate-400'>Get the best deals on your favourite products</p>
          </div>
          <div className='flex-1 flex flex-col justify-center items-end'>
            <img src={img} alt='topframe' height={300} width={700} className='border-0 rounded-lg'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopFrame