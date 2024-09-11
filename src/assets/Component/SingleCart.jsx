

const SingleCart = ({item}) => {
    return (
        <div className="w-[390px] p-2 rounded-md m-3 bg-gradient-to-r from-cyan-300 to-green-300 flex flex-col">
            <div className="flex-grow">
                <img className="w-[380px] h-[350px]" src={item.item.images} alt="" />
                <h1 className="text-3xl text-orange-500 font-bold text-center py-3">{item.item.title}</h1>
                <p className="text-lg text-emerald-700 font-bold text-center py-3 px-3"> Category : {item.item.category}</p>
                <p className="text-lg text-orange-700 font-medium text-center  px-3">{item.item.description}</p>
                <div className="flex justify-between px-4 py-3">
                    <p className="text-lg text-emerald-700 font-bold text-center py-3 px-3"> Price: {item.item.price}</p>
                    <p className="badge badge-primary badge-outline m-3"> Rating: {item.item.rating}</p>
                </div>
            </div>
            
        </div>
    );
};

export default SingleCart;