import React from "react";

const Smurf = ({ smurf }) => {
    return (
        <>
            <h2>{smurf.name}</h2>
            <p>Age: {smurf.age} years old</p>
            <p>Height: {smurf.height}</p>
        </>
    );
};

export default Smurf;