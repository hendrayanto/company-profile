import React, { useState, useEffect, useRef } from 'react';
import Header from './Header';
import Pro1Image from '../image/pro1.png';
import Pro2Image from '../image/pro2.png';
import Pro3Image from '../image/pro3.png';
import Pro4Image from '../image/pro4.png';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';

const productData = [
    {
        id: 1, name: 'Verizonth Smart Home Hub', price: 450, image: Pro1Image, description: 'A smart home automation hub that connects and controls various smart home devices. It features voice control, a touch screen interface, and compatibility with popular smart home ecosystems like Google Home.'
    },
    {
        id: 2, name: 'Verizonth ProBook', price: 250, image: Pro2Image, description: 'A high-performance laptop designed for professionals and creatives. It features a sleek aluminum body, a 15.6-inch 4K Retina display, and the latest Intel Core i9 processor. The ProBook comes with 32GB RAM'
    },
    {
        id: 3, name: 'VerizonthWatch Series 5', price: 150, image: Pro3Image, description: 'A smart wearable device that seamlessly integrates with other Verizonth products. It features a circular AMOLED display, health and fitness tracking, and support for third-party apps.'
    },
    {
        id: 4, name: 'Verizonth Smartphone', price: 299, image: Pro4Image, description: 'Verizonth smartphone equipped with cutting-edge technology, including a 6.7-inch OLED display, and a powerful A15 Bionic chip. It a quad-camera system with AI enhancements for stunning photography.'
    }
];

const Products = () => {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1024px)' });
    const productListRef = useRef(null);
    const navigate = useNavigate();
    const [selectedProducts, setSelectedProducts] = useState([]);

    useEffect(() => {
        if (!isDesktopOrLaptop) {
            productListRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [isDesktopOrLaptop]);

    const handleBuyClick = (productId) => {
        setSelectedProducts(prevSelected =>
            prevSelected.includes(productId)
                ? prevSelected.filter(id => id !== productId)
                : [...prevSelected, productId]
        );
    };

    const handleCheckout = () => {
        navigate('/checkout', { state: { selectedProducts } });
    };

    const renderProducts = () => {
        return productData.map(product => (
            <div key={product.id} className="flex justify-center">
                <div className="bg-white rounded-lg shadow-lg p-6 w-[700px] md:max-w-fit h-[290px] flex flex-col items-center space-y-4 relative">
                    <div className="flex items-center justify-between w-full">
                        <div className="text-lg font-bold mb-2">
                            {product.name} ${product.price}
                        </div>
                        <button
                            className={`font-bold py-2 px-3 rounded text-white ${selectedProducts.includes(product.id) ? 'bg-red-500 hover:bg-red-700 focus:ring-red-300' : 'bg-blue-500 hover:bg-blue-700 focus:ring-blue-300'}`}
                            onClick={() => handleBuyClick(product.id)}
                            style={{ fontSize: '10px' }}
                        >
                            {selectedProducts.includes(product.id) ? 'CANCEL' : 'BUY'}
                        </button>
                    </div>
                    <img src={product.image} alt={product.name} className="w-full h-auto rounded-lg mb-4" style={{ width: '200px', height: '100px' }} />
                    <p className="text-sm text-gray-700 mb-4">{product.description}</p>
                </div>
            </div>
        ));
    };

    return (
        <>
            <Header />
            <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center px- sm:px-10">
                <div className="bg-gray-400 bg-opacity-20 rounded-xl p-4 text-lg leading-6 text-justify w-full" style={{ maxWidth: '90vw', marginBottom: '100px' }}>
                    <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
                    <div className={`grid grid-cols-1 ${isDesktopOrLaptop ? 'sm:grid-cols-2' : ''} gap-8 gap-x-0`} style={{ maxWidth: '100%', maxHeight: 'calc(100vh - 260px)', overflowY: 'auto' }} ref={productListRef}>
                        {renderProducts()}
                    </div>
                    {selectedProducts.length > 0 && (
                        <div className="flex justify-center mt-4">
                            <button
                                className="bg-green-500 hover:bg-green-700 focus:ring-green-300 text-white font-bold py-2 px-4 rounded"
                                onClick={handleCheckout}
                            >
                                Proceed to Checkout
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Products;
