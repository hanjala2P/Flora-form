import React from 'react';
import { useParams } from 'react-router';

const ViewDetails = () => {
    const {id }= useParams();
    conssole.log("id", id);
    return (
        <div>
            
        </div>
    );
};

export default ViewDetails;