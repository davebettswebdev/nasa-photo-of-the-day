import React, {useState, useEffect} from "react";
import axios from "axios";
import {Card, CardImg, CardText, CardTitle, CardSubtitle, Col} from 'reactstrap';
import "./Styles.css";




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
        
            <div style={{ maxWidth: "1000px" }}>
                <Col sm="6">
                    <Card>
                        <div>
                        <CardImg top width="100%" src={apodData.hdurl} alt={apodData.title} />
                        <h1><CardTitle style={{padding:"2%"}}>{apodData.title}</CardTitle></h1>
                            <CardSubtitle>NASA Picture of the Day<br></br><strong>{apodData.date}</strong></CardSubtitle>
                            <p><CardText style={{padding:"2%"}}>{apodData.explanation}</CardText></p>
                            <footer>©Copyright: {apodData.copyright}</footer>
                        </div>
                    </Card>
                </Col>
            </div>
        
    );
}

export default APOD;