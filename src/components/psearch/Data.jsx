import { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests
import {Buffer} from 'buffer';


// Define your Data component
const Data = () => {
    const [place, setPlace] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:4005/Placedetails/photoview")
            .then(response => {
                console.log(response.data);
                setPlace(response.data);
            })
            .catch(err => console.log(err));
    }, []);

    // Define an array to hold card data
    const cardData = [];

    // Populate card data based on place data
    place.forEach((value, index) => {
        // Convert buffer data to base64
        const imageData = <img src={`data:image/jpeg;base64,${Buffer.from(value.placephoto.data)}`} alt='error'/>;
    
        cardData.push({
            id: index + 1,
            imge: imageData, // Assign the base64-encoded image data directly
            title: value.placename,
            place: value.location,
            desc: value.desc,
            
        });
    });
    // Return the populated card data array
    return cardData;
}

export default Data;
