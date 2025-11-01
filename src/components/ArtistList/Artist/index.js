import React from "react";
import "./styles.css";

const Artist = ({ imgSrc, name}) => {
    return (
        <>
            <img className="main_library-artist-img" src={imgSrc} alt={name}/>
            <p className="main_library-artist-name">{name}</p>
        </>
    );
}
export default Artist;