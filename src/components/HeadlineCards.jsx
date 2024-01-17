import React from 'react'

function HeadlineCards() {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        <div className='rounded-xl relative'>
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Sun's Out, BOGO's Out</p>
                <p className='px-2'>Through B/26</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4 hover:bg-orange-500 duration-700'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/2894922/pexels-photo-2894922.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>
        <div className='rounded-xl relative'>
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>New Restaurants</p>
                <p className='px-2'>Added Daily</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4 hover:bg-orange-500 duration-700'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/1137473/pexels-photo-1137473.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>
        <div className='rounded-xl relative'>
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>We Deliver Desserts Top</p>
                <p className='px-2'>Testy Treats</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4 hover:bg-orange-500 duration-700'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/750075/pexels-photo-750075.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>
    </div>
  )
}

export default HeadlineCards