import React from 'react';
import { useNavigate, useParams } from 'react-router';
import { useLoaderData } from 'react-router';

const ViewDetails = () => {
    const navigate = useNavigate();
    const {id }= useParams();
    const details = useLoaderData();

    // console.log(details);
    const data = details?.plants?.find((plant) => parseInt(plant.plantId) === parseInt(id));
    console.log(data);
    if(!data){
        return <div className="flex flex-col items-center justify-center h-screen gap-4 text-center">
            <p className="text-gray-600 text-2xl mb-12">Card data not found please go back and try again.</p>
            <button className="bg-lime-500 px-12 text-white px-4 py-2 rounded font-medium" onClick={()=> navigate(-1)}>Go Back</button>
        </div>;
    }
    
    return (
        <div>
            <h1>View Details Page</h1>
            <p>Plant ID: {id}</p>
            <p>Plant Name: {data.plantName}</p>



        </div>
    );
};

export default ViewDetails;