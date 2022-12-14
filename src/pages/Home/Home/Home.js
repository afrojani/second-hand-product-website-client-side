import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <div className="divider"></div>
            <Services></Services>
        </div>
    );
};

export default Home;