import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Pro1Image from '../image/pro1.png';
import Pro2Image from '../image/pro2.png';
import Pro3Image from '../image/pro3.png';
import Pro4Image from '../image/pro4.png';

const products = [
    { id: 1, name: 'Verizonth Smart Home Hub', price: 450, image: Pro1Image, description: 'A smart home automation hub that connects and controls various smart home devices. It features voice control, a touch screen interface, and compatibility with popular smart home ecosystems like Google Home and Amazon Alexa.' },
    { id: 2, name: 'Verizonth ProBook', price: 250, image: Pro2Image, description: 'A high-performance laptop designed for professionals and creatives. It features a sleek aluminum body, a 15.6-inch 4K Retina display, and the latest Intel Core i9 processor. The ProBook comes with 32GB RAM and 1TB SSD storage.' },
    { id: 3, name: 'VerizonthWatch Series 5', price: 150, image: Pro3Image, description: 'A smart wearable device that seamlessly integrates with other Verizonth products. It features a circular AMOLED display, health and fitness tracking, and support for third-party apps.' },
    { id: 4, name: 'Verizonth Smartphone', price: 299, image: Pro4Image, description: 'Verizonth smartphone equipped with cutting-edge technology, including a 6.7-inch OLED display, 5G connectivity, and a powerful A15 Bionic chip. It boasts a quad-camera system with AI enhancements for stunning photography and videography.' }
];

const Checkout = () => {
    const location = useLocation();
    const { selectedProducts } = location.state || {};

    const selectedProductsData = products.filter(product => selectedProducts && selectedProducts.includes(product.id));

    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        let total = 0;
        selectedProductsData.forEach(product => {
            total += product.price;
        });
        setTotalPrice(total);
    }, [selectedProductsData]);

    return (
        <>
            <Header />
            <div className="bg-gray-100 min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white rounded-lg shadow-md p-4">
                            <h2 className="text-2xl font-bold text-center mb-4">Payment Information</h2>
                            <form className="space-y-4">
                                <div>
                                    <label htmlFor="nameOnCard" className="block text-sm font-medium text-gray-700">
                                        Name on Card
                                    </label>
                                    <input
                                        type="text"
                                        id="nameOnCard"
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        placeholder="Jane Doe"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
                                        Card Number
                                    </label>
                                    <input
                                        type="text"
                                        id="cardNumber"
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        placeholder="1234 5678 9012 3456"
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="expiry" className="block text-sm font-medium text-gray-700">
                                            Expiry Date
                                        </label>
                                        <input
                                            type="text"
                                            id="expiry"
                                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            placeholder="MM/YY"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">
                                            CVV
                                        </label>
                                        <input
                                            type="text"
                                            id="cvv"
                                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            placeholder="123"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="totalAmount" className="block text-sm font-medium text-gray-700">
                                        Total Amount
                                    </label>
                                    <input
                                        type="text"
                                        id="totalAmount"
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 bg-gray-100"
                                        value={`$${totalPrice}`}
                                        readOnly
                                    />
                                </div>
                                <div>
                                    <button
                                        type="button"
                                        className="w-full inline-flex items-center justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Pay Total Amount
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-2 pt-5">
                            <h2 className="text-2xl font-bold text-center mb-4">Order Summary</h2>
                            <div className="space-y-4 max-h-96 overflow-y-auto">
                                {selectedProductsData.map((product) => (
                                    <div key={product.id} className="flex items-center space-x-4">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-10 h-10 rounded-md object-cover"
                                        />
                                        <div>
                                            <p className="text-lg font-semibold">{product.name}</p>
                                            <p className="text-sm text-gray-500">${product.price}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Checkout;
