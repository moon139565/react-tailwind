
import React, { useState } from 'react'
import  {data}  from '../data/data.js';

function Food() {
    const [foods, setFoods] = useState(data);

    // filter javascript
    const filterType = (category) => {
        setFoods(
            data.filter((item)=>{
                return item.category === category;
            })
        )
    }

    // filter price
    const filterPrice = (price) =>{
        setFoods(
            data.filter((item)=>{
                return item.price === price;
            })
        )
    }


  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
        <h2 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menu Items</h2>
        {/* filter row */}
        <div className='flex flex-col lg:flex-row justify-between'>
            {/* filter type */}
            <div>
                <p className='font-bold text-gray-700'>Filter Type</p>
                <div className='flex justify-between flex-wrap'>
                    <button onClick={()=> setFoods(data)} className='m-1 px-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>All</button>
                    <button onClick={()=> filterType('burger')} className='m-1 px-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Burgers</button>
                    <button onClick={()=> filterType('pizza')} className='m-1 px-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Pizza</button>
                    <button onClick={()=> filterType('salad')} className='m-1 px-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Salads</button>
                    <button onClick={()=> filterType('chicken')} className='m-1 px-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Chicken</button>
                </div>
            </div>

            {/* filter price */}
            <div>
                <p className='font-bold text-gray-700'>Filter Price</p>
                <div className='flex justify-between max-w-[390px] w-full'>
                    <button onClick={() => filterPrice('$59')} className='m-1 px-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$59</button>
                    <button onClick={() => filterPrice('$70')} className='m-1 px-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$70</button>
                    <button onClick={() => filterPrice('$89')} className='m-1 px-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$89</button>
                    <button onClick={() => filterPrice('$120')} className='m-1 px-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$120</button>
                </div>
            </div>
        </div>


        {/* display foods */}

        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
            {foods.map((item, index)=>(
                <div key={index} className='border shadow-lg rounded-lg hover:scale-105 duration-300'>
                    <img className='w-full h-[200px] object-cover rounded-t-lg' src={item.image} alt={item.name} />
                    <div className='flex justify-between px-2 py-4'>
                        <p className='font-bold'>{item.name}</p>
                        <p>
                            <span className='bg-orange-500 text-white p-1 rounded-full'>{item.price}</span>
                        </p>
                    </div>
                </div>
            ))}
        </div>


    </div>
  )
}

export default Food