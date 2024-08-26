import { useState, useContext } from 'react';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";
import { IoClose } from "react-icons/io5";

import GenContext from '../helpers/GenContext';
import product_1 from "../assets/images/image-product-1.jpg";
import product_2 from "../assets/images/image-product-2.jpg";
import product_3 from "../assets/images/image-product-3.jpg";
import product_4 from "../assets/images/image-product-4.jpg";
import product_thumbnail_1 from "../assets/images/image-product-1-thumbnail.jpg";
import product_thumbnail_2 from "../assets/images/image-product-2-thumbnail.jpg";
import product_thumbnail_3 from "../assets/images/image-product-3-thumbnail.jpg";
import product_thumbnail_4 from "../assets/images/image-product-4-thumbnail.jpg";


const ImagesNavigator = () => {
    let products = [product_1, product_2, product_3, product_4];
    let productsThumbnail = [product_thumbnail_1, product_thumbnail_2, product_thumbnail_3, product_thumbnail_4];
    const { isSliderOpen, setSliderOpen, selectedProductIndex, setSelectedProductIndex } = useContext(GenContext);

    const slideRight = () => {
        if (selectedProductIndex < products.length - 1) {
            setSelectedProductIndex(prev => prev + 1);
        } else {
            setSelectedProductIndex(0);
        }
    };

    const slideLeft = () => {
        if (selectedProductIndex > 0) {
            setSelectedProductIndex(prev => prev - 1);
        } else {
            setSelectedProductIndex(products.length - 1);
        }
    };

    const hideSlider = () => {
        setSliderOpen(false);
    };
    return (
        <>
            {isSliderOpen &&
                (<div className='flex flex-col justify-center items-center fixed top-0 left-0 w-full h-full bg-black bg-opacity-70'>
                    <div className='flex justify-end w-96 text-lg'>
                        <IoClose onClick={hideSlider} className='cursor-pointer my-2' fill='#fff' size={30} />
                    </div>
                    <div className="flex mx-5 relative">
                        <IoIosArrowDropleftCircle onClick={slideLeft} fill='#fff' size={50} className='absolute top-40 -left-6 cursor-pointer' />
                        <img className="rounded-lg w-96" src={products[selectedProductIndex]} alt="" />
                        <IoIosArrowDroprightCircle onClick={slideRight} fill='#fff' size={50} className='absolute top-40 -right-6 cursor-pointer' />
                    </div>
                    <div className="flex justify-around w-80 mt-4">
                        {products.map((item, index) =>
                            <div key={index} className={`rounded-lg w-16 h-16 cursor-pointer ${index === selectedProductIndex ? 'border-c-orange border-2' : ''}`}>
                                <img onClick={() => { setSelectedProductIndex(index); }} className={`rounded-md ${index === selectedProductIndex ? 'brightness-110' : ''}`} src={productsThumbnail[index]} alt="" />
                            </div>
                        )}
                    </div>
                </div>)}
        </>
    );
};

export default ImagesNavigator;