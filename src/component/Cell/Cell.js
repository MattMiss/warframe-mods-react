import React from 'react';

const cell = (props) => {

    const description = props.contents.map(desc => (
        <li>{desc}</li>
    ));
    
    return(     
        <p>{description}</p>
    );
};

export default cell;