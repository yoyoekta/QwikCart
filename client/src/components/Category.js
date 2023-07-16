import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import fetchProds from './FetchProds'
import { Link } from 'react-router-dom'

const CategoryItems = ({category}) => {

    const hardProds = fetchProds(category)

    return (
        <div className='m-6 p-3 border rounded-md'>
            <div className='flex justify-between items-center space-x-5'>
                <div className='flex-1'>
                    <h3 className='text-2xl font-bold'>Deals on {category}</h3>
                </div>
                <Link to={`/products/${category}`} className='flex-1 flex justify-end items-center space-x-2 flex-grow cursor-pointer'>
                    <div className='flex-1 flex justify-end items-center space-x-2 flex-grow cursor-pointer'>
                        <h4 className='text-medium font-semibold'>Show all</h4>
                        <FaArrowRight />
                    </div>
                </Link>
            </div>
            
            <div className='flex justify-center space-x-5'>
                {hardProds.map((product, index) => {
                    return (
                        <div className='cursor-pointer' key={index}>
                            <div className='p-4 m-2 flex flex-col space-y-2'>
                                <h3 className='text-xl font-semibold'>{product.itemName}</h3>
                                <img src={product.image} alt={product.itemName} height={300} width={300}/>
                                <Link to={`/product/hard/${category}/${product.id}`}><p className='hover:text-blue-500'>Shop now</p></Link>
                            </div>
                        </div>
                    )
                })}
            </div>    
        </div>
    )
}

const Category = () => {

    const categoryList = [
        "electronics",
        "clothing",
        "household",
        "art & crafts"
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