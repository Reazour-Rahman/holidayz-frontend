import React from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
    const {blogId} = useParams();
    return (
        <div>
            <h1>THis is details page {blogId}</h1>
        </div>
    );
};

export default Details;