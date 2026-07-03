import React from 'react';
import Hero from '../pages/Hero';
import Categories from '../pages/Categories';
import Tips from '../pages/Tips';
import Expert from '../pages/Expert';
import Ideas from '../pages/Ideas';


const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Categories></Categories>
            <Tips></Tips>
            <Expert></Expert>
            <Ideas></Ideas>
           
        </div>
    );
};

export default Home;