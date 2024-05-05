import { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests
import {Buffer} from 'buffer';


// Define your Data component
const Hdata = () => {
    const [hotel, setHotel] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:4005/Hoteldetails/hview")
            .then(response => {
                console.log(response.data);
                setHotel(response.data);
            })
            .catch(err => console.log(err));
    }, []);

    // Define an array to hold card data
    const cardData = [];

    // Populate card data based on place data
    hotel.forEach((value, index) => {
        cardData.push({
            id: index + 1,
            img: <img src={`data:image/jpeg;base64,${Buffer.from(value.hotelphoto.data)}`} alt='Error'/>,
            title: value.hotelname,
            place: value.hlocation,
            desc: value.htsee,
        });
    });

    // Return the populated card data array
    return cardData;
}

export default Hdata;
