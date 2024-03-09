import React from 'react'
import { BiSolidCategoryAlt } from "react-icons/bi";
import { IoHome, IoHeart } from "react-icons/io5";
import { Link } from 'react-router-dom';


const Sidenav = () => {
    return (
        <nav className='content-end  px-10 h-full '>
            <h2 className='primary-btn inline-block text-transparent bg-clip-text text-xl font-bold mt-10'>Prueba BeMaster</h2>
            <ul className='gap-20 mt-20' >

                <li className='rounded-3xl py-2 px-2 relative  duration-300 transition-all ease-in-out hover:primary-btn delay-300'>
                    <Link to='/home' className=' items-center font-bold text-white align-middle block w-full h-full overflow-hidden'>
                        <span className="relative z-10 flex items-center space-x-2 ml-2">
                            <IoHome className='mr-3' />
                            Inicio
                        </span>
                    </Link>
                </li>

                <li className='rounded-3xl py-2 px-2 relative  duration-300 transition-all ease-in-out hover:primary-btn delay-300'>
                    <Link to='' className=' items-center font-bold text-white align-middle block w-full h-full overflow-hidden'>

                        <span className="relative z-10 flex items-center space-x-2 ml-2">
                            <IoHeart className="mr-3" />
                            Destacados
                        </span>
                    </Link>
                </li>

                <li className='rounded-3xl py-2 px-2 relative  duration-300 transition-all ease-in-out hover:primary-btn delay-300'>
                    <Link to='/categories' className=' items-center font-bold text-white align-middle block w-full h-full overflow-hidden'>

                        <span className="relative z-10 flex items-center space-x-2 ml-2">
                            <BiSolidCategoryAlt className="text-white mr-3" />
                            Categorias
                        </span>
                    </Link>
                </li>


            </ul>
        </nav>
    )
}

export { Sidenav }