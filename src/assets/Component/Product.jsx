
import useProduct from '../Hooks/UseProduct';
import SingleProduct from './singleProduct';
import { useState } from "react";

const Product = () => {

    const [product] = useProduct()
          
    const [showProduct, setShowProduct] = useState(product?.products)
    
    const handleAll = ()=>{

        setShowProduct(product?.products)
        
    }
    const handleBeauty = ()=>{

        const beautyProduct = product.products?.filter(item => item.category === "beauty")
        setShowProduct(beautyProduct)
        
    }
    const handleFurniture = ()=>{
        const furnitureProduct = product.products?.filter(item => item.category === "furniture")
        setShowProduct(furnitureProduct)
    }
    const handleFragrances = ()=>{
        const fragrancesProduct = product.products?.filter(item => item.category === "fragrances")
        setShowProduct(fragrancesProduct)
    }
    const handleGroceries = ()=>{
        const groceriesProduct = product.products?.filter(item => item.category === "groceries")
        setShowProduct(groceriesProduct)
    }

    return (
        <div>
            <h1 className='text-3xl text-amber-500 text-center font-bold mb-20 w-[380px] lg:w-[600px] mt-10 mx-auto'>Here you can have some beautiful products from our site</h1>
            <div className=" flex flex-col lg:flex-row gap-3 w-[390px] lg:w-[500px] mx-auto">
                <button onClick={handleAll} className=" w-32 h-10 p-2 rounded-xl bg-orange-700 text-white font-bold"> All </button>
                <button onClick={handleBeauty} className=" w-32 h-10 p-2 rounded-xl bg-orange-700 text-white font-bold"> Beauty </button>
                <button onClick={handleFurniture} className=" w-32 h-10 p-2 rounded-xl bg-orange-700 text-white font-bold"> Furniture </button>
                <button onClick={handleFragrances} className=" w-32 h-10 p-2 rounded-xl bg-orange-700 text-white font-bold"> Fragrances</button>
                <button onClick={handleGroceries} className=" w-32 h-10 p-2 rounded-xl bg-orange-700 text-white font-bold"> Groceries</button>
            </div>
            <div className=' max-w-[1200px] mx-auto grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
                {
                    showProduct?.map((item)=><SingleProduct key={item.id} item={item}></SingleProduct>)
                }

            </div>
            
        </div>
    );
};

export default Product;