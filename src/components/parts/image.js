import React from "react";

function Image(props) {

    const styles = {
        width: '50%'
    }

    return(
        <div>
            <img src={props.source} style={styles} alt={props.alt}/>
        </div>
    );
}

export default Image;