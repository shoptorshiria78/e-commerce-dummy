import React from 'react';

const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img
                    src="https://cdn.dummyjson.com/products/images/groceries/Kiwi/1.png"
                    className="w-[1200px] h-[500px] bg-gradient-to-r from-emerald-300 to-yellow-200 mx-auto"  />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img
                    src="https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/1.png"
                    className="w-[1200px] h-[500px] bg-gradient-to-r from-emerald-300 to-yellow-200 mx-auto"  />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img
                    src="https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/1.png"
                    className="w-[1200px] h-[500px] bg-gradient-to-r from-emerald-300 to-yellow-200 mx-auto" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img
                    src="https://cdn.dummyjson.com/products/images/groceries/Beef%20Steak/1.png"
                    className="w-[1200px] h-[500px] bg-gradient-to-r from-emerald-300 to-yellow-200 mx-auto" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;