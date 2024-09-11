import React from 'react';
import Footer from '../Shared/Footer';
import NavBar from '../Shared/NavBar';
import Banner from '../../Component/Banner';
import Product from '../../Component/Product';

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <Product></Product>
            <Footer></Footer>
        </div>
    );
};

export default Home;