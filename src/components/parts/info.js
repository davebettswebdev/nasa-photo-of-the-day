import React from "react";

function Info(props) {
    return(
        <div>
            <p>Date: {props.date}</p>
            <p>Media Type: {props.media}</p>
        </div>
    );
}

export default Info;