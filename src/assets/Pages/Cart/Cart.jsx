import React, { useEffect, useState } from 'react';
import NavBar from '../Shared/NavBar';
import SingleCart from '../../Component/SingleCart';

const Cart = () => {
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
        <div>
            <NavBar></NavBar>
            <div className=' max-w-[1200px] mx-auto grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
                {
                    product?.map((item) => <SingleCart key={item.item.id} item={item}></SingleCart>)
                }

            </div>
        </div>
    );
};

export default Cart;