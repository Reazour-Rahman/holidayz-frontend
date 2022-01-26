import React from 'react';
import Banner from './Banner/Banner';
import Blogs from './Blogs/Blogs';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='' style={{padding:"0px 24px", marginBottom:"30px"}}>
            <Blogs></Blogs>
            </div>
        </div>
    );
};

export default Home;