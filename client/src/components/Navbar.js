import React, { useState } from 'react'
import { FaUser } from 'react-icons/fa';
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    const [open, setOpen] = useState(false);

    const checkToken = () => {
        if(localStorage.getItem('token')){
            return true;
        }
        else{
            return false;
        }
    }

    const primary = [
        {
            name: 'Home',
            link: '/'
        },
        {
            name: 'About',
            link: '/about'
        },
        {
            name: 'Contact',
            link: '/contact'
        },
        {
            name: 'Cart',
            link: '/cart'
        },
        {
            name: 'Login/Signup',
            link: '/login'
        }
    ]
    return (
        <nav className="min-w-screen bg-white">
            <div className="mx-5 my-2">
                <div className="relative flex items-center h-16">
                <div className="flex justify-between items-center w-full">
                    <div className="flex-shrink-0 flex flex-row space-x-4">
                        <span className="text-3xl font-bold">QwikCart</span>
                    </div>
                    <div className="flex space-x-4 items-center">
                        { primary.map((item, index) => {
                            return (
                                <div key={index} className="flex font-normal text-lg space-x-4">
                                    { (checkToken() && item.name === 'Login/Signup') ?
                                        (<div className="relative border border-slate-500 rounded-full p-2">
                                            <FaUser onClick={()=>setOpen(!open)} className='cursor-pointer text-xl'/>
                                            { open ?
                                                (<div className='z-10 absolute -right-4 top-10 bg-white border-2 rounded-xl border-black'>
                                                    <div className='flex flex-col p-2 m-2 space-y-1  '>
                                                        <NavLink to='/myproducts' className='text-slate-500 hover:text-slate-700'>My&nbsp;Products</NavLink>
                                                        <hr className='bg-slate-500 border-2 h-1'/>
                                                        <NavLink to='/addproduct' className='text-slate-500 hover:text-slate-700 '>Add&nbsp;Product</NavLink>
                                                        <hr className='bg-slate-500 border-2 h-1'/>
                                                        <NavLink to='/logout' className='text-slate-500 hover:text-slate-700'>Logout</NavLink>
                                                    </div>
                                                </div>) : ""
                                            }
                                        </div>) :
                                        (<NavLink to={item.link} className={({isActive}) => isActive ? "underline underline-offset-8" : ""}>
                                            {item.name}
                                        </NavLink>)
                                    }
                                </div>
                            )}
                        )}
                    </div>
                </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar