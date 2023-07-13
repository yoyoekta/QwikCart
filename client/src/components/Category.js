import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import electronics from '../images/electronics.jpg'

const CategoryItems = ({category}) => {

    return (
        <div className='m-6 p-3 border rounded-md'>
            <div className='flex justify-between items-center space-x-5'>
                <div className='flex-1'>
                    <h3 className='text-2xl font-bold'>Deals on {category}</h3>
                </div>
                
                <div className='flex-1 flex justify-end items-center space-x-2 flex-grow cursor-pointer'>
                    <h4 className='text-medium font-semibold'>Show all</h4>
                    <FaArrowRight />
                </div>
            </div>
            
            <div className='flex justify-center space-x-5'>
                <div className='cursor-pointer'>
                    <div className='p-4 m-2 flex flex-col space-y-2'>
                        <h3 className='text-xl font-semibold'>Product 1</h3>
                        <img src={electronics} alt='Product 1' height={300} width={300}/>
                        <p>Shop now</p>
                    </div>
                </div>

                <div className='cursor-pointer'>
                    <div className='p-4 m-2 flex flex-col space-y-2'>
                        <h3 className='text-xl font-semibold'>Product 1</h3>
                        <img src={electronics} alt='Product 1' height={300} width={300}/>
                        <p>Shop now</p>
                    </div>
                </div>

                <div className='cursor-pointer'>
                    <div className='p-4 m-2 flex flex-col space-y-2'>
                        <h3 className='text-xl font-semibold'>Product 1</h3>
                        <img src={electronics} alt='Product 1' height={300} width={300}/>
                        <p>Shop now</p>
                    </div>
                </div>

                <div className='cursor-pointer'>
                    <div className='p-4 m-2 flex flex-col space-y-2'>
                        <h3 className='text-xl font-semibold'>Product 1</h3>
                        <img src={electronics} alt='Product 1' height={300} width={300}/>
                        <p>Shop now</p>
                    </div>
                </div>

                
            </div>    
        </div>
    )
}

const Category = () => {

    const categoryList = [
        "Electronics",
        "Clothing",
        "Household",
        "Art & Craft"
    ]

    return (
        <div>
            { categoryList.map((item, index) => {
                    return (
                        <CategoryItems key={index} category={item} />
                    )
                })
            }
        </div>
    )
}

export default Category