import { useState, useContext, useRef } from 'react';
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";


import GenContext from '../helpers/GenContext';
import logo from '../assets/images/logo.svg'
import cart from '../assets/images/icon-cart.svg'
import avatar from '../assets/images/image-avatar.png'
import product_1 from "../assets/images/image-product-1.jpg";
import DeleteIcon from './DeleteIcon';

const Navbar = () => {
    const [isOpen, setOpen] = useState(false);
    const [mobileMenuVisibility, setMobileMenuVisibility] = useState(false);
    const cartButton = useRef();
    const { productQuantity, setProductQuantity } = useContext(GenContext);

    const handleHover = (e) => {
        if (e.type === 'mouseenter') {
            setOpen(true);
        } else if (e.type === 'mouseleave') {
            setOpen(false);
        }
    }
    return (
        <>
            <div className="my-container">
                <div className='flex items-center justify-between mx-6 py-6 border-b-1 border-b-grayish-blue'>
                    <div className="flex items-center">
                        <div className="mr-5 md:hidden">
                            <FiMenu onClick={()=>setMobileMenuVisibility(true)} className='text-2xl cursor-pointer' />
                        </div>
                        <img className='pr-10' src={logo} />
                        <ul className='hidden md:flex items-center '>
                            <li><a className='mr-5 py-8 border-b-0 border-b-c-orange text-dark-grayish-blue hover:text-black hover:border-b-4' href='#'>Collection</a></li>
                            <li><a className='mr-5 py-8 border-b-0 border-b-c-orange text-dark-grayish-blue hover:text-black hover:border-b-4' href='#'>Man</a></li>
                            <li><a className='mr-5 py-8 border-b-0 border-b-c-orange text-dark-grayish-blue hover:text-black hover:border-b-4' href='#'>Women</a></li>
                            <li><a className='mr-5 py-8 border-b-0 border-b-c-orange text-dark-grayish-blue hover:text-black hover:border-b-4' href='#'>About</a></li>
                            <li><a className='mr-5 py-8 border-b-0 border-b-c-orange text-dark-grayish-blue hover:text-black hover:border-b-4' href='#'>Contact</a></li>
                        </ul>
                    </div>
                    <div className="flex items-center">
                        <div ref={cartButton} onMouseEnter={handleHover} onMouseLeave={handleHover} className='relative mr-10'>
                            <div className="relative cursor-pointer">
                                <img className='w-5 py-3' src={cart} alt="" />
                                <div className="absolute bg-c-orange h-4 px-2 rounded-lg text-xs text-white bottom-6 left-2">{productQuantity}</div>
                            </div>
                            {isOpen && (<div className='flex flex-col bg-white h-52 w-80 sm:w-307p absolute -right-20 sm:-right-4 sm:top-9 shadow-[0px_9px_25px_-5px_rgba(0,0,0,0.4)] rounded-md z-10'>
                                <div className="py-4 px-4 font-bold border-b-1 border-b-grayish-blue">
                                    Cart
                                </div>
                                {
                                    (productQuantity > 0)
                                        ? <div className='flex flex-col p-5'>
                                            <div className="flex justify-between items-center">
                                                <img className='w-10 rounded' src={product_1} alt="" />
                                                <div className="px-3 text-sm text-dark-grayish-blue">Fall Limited Edition Sneakers<br /> $125.00 x {productQuantity} <span className="font-bold text-black">{125 * productQuantity}$</span></div>
                                                <DeleteIcon onClick={() => setProductQuantity(0)}/>
                                            </div>
                                            <button className='mt-5 bg-c-orange font-semibold text-white text-sm py-3 rounded-xl shadow-lg shadow-orange-300 hover:opacity-75'>Checkout</button>
                                        </div>
                                        : <div className='flex items-center justify-center font-bold basis-full'>
                                            Your cart is empty.
                                        </div>
                                }
                            </div>)}
                        </div>
                        <img className='w-11 border-2 rounded-full border-c-orange' src={avatar} alt="" />
                    </div>

                </div>
            </div>
            {mobileMenuVisibility && (<div className='md:hidden flex flex-col fixed top-0 left-0 bg-black bg-opacity-70 h-full w-full z-10'>
                <div className="bg-white w-3/4 h-full p-4">
                    <IoClose onClick={()=>setMobileMenuVisibility(false)} className='cursor-pointer my-2' fill='#000' size={20}/>
                    <ul className='pt-4'>
                        <li className='my-3'><a className='font-bold' href='#'>Collection</a></li>
                        <li className='my-3'><a className='font-bold' href='#'>Man</a></li>
                        <li className='my-3'><a className='font-bold' href='#'>Women</a></li>
                        <li className='my-3'><a className='font-bold' href='#'>About</a></li>
                        <li className='my-3'><a className='font-bold' href='#'>Contact</a></li>
                    </ul>
                </div>
            </div>)}
        </>
    );
};

export default Navbar;