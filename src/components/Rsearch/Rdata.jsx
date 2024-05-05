import { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests
import {Buffer} from 'buffer';


// Define your Data component
const Rdata = () => {
    const [restra, setRestra] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:4005/Restradetails/resview")
            .then(response => {
                console.log(response.data);
                setRestra(response.data);
            })
            .catch(err => console.log(err));
    }, []);

    // Define an array to hold card data
    const cardData = [];

    // Populate card data based on place data
    restra.forEach((value, index) => {
        cardData.push({
            id: index + 1,
            img: <img src={`data:image/jpeg;base64,${Buffer.from(value.restraphoto.data)}`} alt='Error'/>,
            title: value.restraname,
            place: value.rlocation,
            desc: value.rtsee,
        });
    });

    // Return the populated card data array
    return cardData;
}

export default Rdata;
