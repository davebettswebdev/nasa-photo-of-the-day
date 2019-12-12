import React, {useState, useEffect} from "react";
import axios from "axios";

import Title from './parts/title';
import Image from './parts/image';
import Info from './parts/info';
import Description from './parts/description';

function APOD() {

    const [apodData, setApodData] = useState('');

    useEffect(() => {
        const fetchAPOD = () => 
            axios.get('https://api.nasa.gov/planetary/apod?api_key=DnNoL6nFE2IYDOQwxHoXTw9QPmnfgkZHEIsfQSLG')
            .then(res => {
                setApodData(res.data);
            });
        fetchAPOD();
    },[])

    return(
        <div>
            <Info date={apodData.date}/>
            <Title title={apodData.title}/>
            <div>
                <Image source={apodData.hdurl} alt={apodData.title}/>
            </div>
            <Description description={apodData.explanation} />
        </div>
    );
}

export default APOD;