import React, { useEffect, useState } from 'react';
import { RiShoppingBag2Fill } from 'react-icons/ri';
import { FaCartArrowDown } from "react-icons/fa";

const NavBar = () => {
    const [product, setProduct] = useState([]);

    // Function to get stored product from localStorage
    const getStoredShoppingCart = () => {
        const storedCart = localStorage.getItem('product');
        let Product = [];
        if (storedCart) {
            try {
                Product = JSON.parse(storedCart);
                if (!Array.isArray(Product)) {
                    Product = [];
                }
            } catch (e) {
                console.error("Error parsing stored product data:", e);
                Product = [];
            }
        }
        return Product;
    };

    useEffect(() => {
        const localProduct = getStoredShoppingCart();
        setProduct(localProduct); // Correctly set the product from local storage
        console.log(localProduct); // Debugging log
    }, []);

    return (
        <div className="navbar bg-gradient-to-r from-cyan-300 to-indigo-300">
            <div className="flex-1">
                <a className="mx-4 font-bold text-3xl text-emerald-600">
                    Shopping <br /> Center
                </a>
                <RiShoppingBag2Fill className="text-5xl text-emerald-600" />
            </div>
            <div>
                <a className='text-xl font-bold text-emerald-600 mr-10' href='/'><p>Home</p></a>

            </div>
            <div className="flex-none">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            < FaCartArrowDown className='text-3xl text-emerald-600' />
                            {/* Display the number of items from the product state */}
                            <span className="badge badge-sm indicator-item">{product.length}</span>
                        </div>
                    </div>
                    <div
                        tabIndex={0}
                        className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                        <div className="card-body">
                            <span className="text-lg font-bold">{product.length} Items</span>
                            <div className="card-actions">
                                <a href='/cart'>
                                    <button className="btn btn-primary btn-block">View cart</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
