


const SingleProduct = ({ item }) => {
    console.log(item)

  
    const handleClick =(item)=>{
        const getStoredShoppingCart = () =>{
            const storedCart = localStorage.getItem('product')
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
            return Product
        }
       
        const saveProductToLocalStorage = (item)=>{
            const Product = getStoredShoppingCart();
            localStorage.setItem('product', JSON.stringify( [...Product, item]))
        }
        
        saveProductToLocalStorage(item)
    }

    return (
        <div className="w-[390px] p-2 rounded-md m-3 bg-gradient-to-r from-lime-300 to-amber-300 flex flex-col">
            <div className="flex-grow">
                <img className="w-[380px] h-[350px]" src={item.images[0]} alt="" />
                <h1 className="text-3xl text-orange-500 font-bold text-center py-3">{item.title}</h1>
                <p className="text-lg text-emerald-700 font-bold text-center py-3 px-3"> Category : {item.category}</p>
                <p className="text-lg text-orange-700 font-medium text-center  px-3">{item.description}</p>
                <div className="flex justify-between px-4 py-3">
                    <p className="text-lg text-emerald-700 font-bold text-center py-3 px-3"> Price: {item.price}</p>
                    <p className="badge badge-primary badge-outline m-3"> Rating: {item.rating}</p>
                </div>
            </div>
            <div className="w-full flex justify-center  py-4">
                <button onClick={()=>handleClick({item})} className="bg-emerald-600 text-white rounded-2xl text-center w-32 h-10">Add to cart</button>
            </div>
        </div>
    );
};

export default SingleProduct;