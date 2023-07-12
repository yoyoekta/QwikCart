import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

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
                                    <NavLink to={item.link} className={({isActive}) => isActive && "underline underline-offset-8"}>
                                        {item.name}
                                    </NavLink>
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