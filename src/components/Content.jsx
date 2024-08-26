import { useState, useContext } from "react";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";

import GenContext from '../helpers/GenContext';
import product_1 from "../assets/images/image-product-1.jpg";
import product_2 from "../assets/images/image-product-2.jpg";
import product_3 from "../assets/images/image-product-3.jpg";
import product_4 from "../assets/images/image-product-4.jpg";
import product_thumbnail_1 from "../assets/images/image-product-1-thumbnail.jpg";
import product_thumbnail_2 from "../assets/images/image-product-2-thumbnail.jpg";
import product_thumbnail_3 from "../assets/images/image-product-3-thumbnail.jpg";
import product_thumbnail_4 from "../assets/images/image-product-4-thumbnail.jpg";
import CartIcon from "./CartIcon";
import PlusIcon from "./PlusIcon";
import MinusIcon from "./MinusIcon";

const Content = () => {
    const [selectedProduct, setSelectedProduct] = useState(product_1);
    const [count, setCount] = useState(0);
    const { setSliderOpen, setSelectedProductIndex, selectedProductIndex, productQuantity, setProductQuantity } = useContext(GenContext);
    console.log(`after refresh : ${selectedProductIndex}`);
    let products = [product_1, product_2, product_3, product_4];
    let productsThumbnail = [product_thumbnail_1, product_thumbnail_2, product_thumbnail_3, product_thumbnail_4];

    const openSlider = () => {
        setSliderOpen(true);
    };

    const subCount = () => {
        if (count === 0) {
            return;
        } else {
            setCount(prev => prev - 1);
        }
    }

    const subIndex = () => {
        if (selectedProductIndex > 0) {
            setSelectedProductIndex(prev => prev - 1);
        } else {
            setSelectedProductIndex(products.length - 1);
        }
        setSelectedProduct(products[selectedProductIndex]);
        console.log(`in function ${selectedProductIndex}`);
    }
    
    const addIndex = () =>  {
        if (selectedProductIndex < products.length - 1) {
            setSelectedProductIndex(prev => prev + 1);
        } else {
            setSelectedProductIndex(0);
        }
        setSelectedProduct(products[selectedProductIndex]);
        console.log(`in function ${selectedProductIndex}`);
    }

    return (
        <>
            <div className="my-container">
                <div className="flex flex-col md:flex-row md:mx-6 md:my-16 items-center">
                    <div className="flex flex-col w-full md:w-1/2 md:mx-5 md:items-center">
                        <div>
                            <IoIosArrowDropleftCircle onClick={subIndex} fill='#fff' size={50} className='absolute top-64 left-5 cursor-pointer md:hidden' />
                            <img onClick={openSlider} className="md:rounded-lg object-cover w-full h-96 md:h-300p md:w-300p cursor-pointer" src={selectedProduct} />
                            <IoIosArrowDroprightCircle onClick={addIndex} fill='#fff' size={50} className='absolute top-64 right-5 cursor-pointer md:hidden' />
                        </div>
                        <div className="hidden md:flex justify-between w-full md:w-300p mt-4">
                            {products.map((item, index) =>
                                <div key={index} className={`rounded-lg w-16 h-16 cursor-pointer ${item === selectedProduct ? 'border-c-orange border-2' : ''}`}>
                                    <img onClick={() => { setSelectedProduct(item); setSelectedProductIndex(index); imageIndex = index; }} className={`rounded-md ${item === selectedProduct ? 'opacity-40' : ''}`} src={productsThumbnail[index]} />
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="md:w-1/2 mx-5 my-5">
                        <div className="text-c-orange text-sm uppercase font-semibold">Sneaker Company</div>
                        <h1 className="font-bold text-4xl mt-4">Fall Limited Edition Sneakers</h1>
                        <div className="text-sm text-dark-grayish-blue mt-7">
                            These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
                        </div>
                        <div className="flex justify-between items-end md:flex-col md:items-start">
                            <div className="mt-4">
                                <div className="font-bold text-2xl inline">
                                    $125.00
                                </div>
                                <div className="inline font-semibold py-0.5 px-2 ml-3 rounded text-c-orange bg-pale-orange ">50%</div>
                            </div>
                            <div className="text-grayish-blue text-sm pt-2 line-through">$250.00</div>
                        </div>
                        <div className="flex flex-col sm:flex-row mt-5">
                            <div className="flex bg-light-grayish-blue justify-between items-center	rounded-xl">
                                <button onClick={subCount} className="py-4 px-4 text-orange">
                                    <MinusIcon fill="hsl(26, 100%, 55%)" />
                                </button>
                                <div className="py-4 px-4 text-sm font-bold text-black">{count}</div>
                                <button onClick={() => setCount(prev => prev + 1)} className="py-4 px-4 font-bold text-orange">
                                    <PlusIcon fill="hsl(26, 100%, 55%)" />
                                </button>
                            </div>
                            <button onClick={() => setProductQuantity(count + productQuantity)} className="bg-c-orange flex items-center basis-full mt-3 sm:mt-0 sm:ml-3 rounded-xl justify-center shadow-lg shadow-orange-300 hover:opacity-75">
                                <CartIcon fill="#ffffff" />
                                <div className="ml-2 text-white font-semibold text-sm py-4 px-4">
                                    add to cart
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Content;