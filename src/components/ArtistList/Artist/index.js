import React from "react";
import {ArtistListArtistImg, ArtistListArtistName } from "./styles";

const Artist = ({ imgSrc, name}) => {
    return (
        <>
            <ArtistListArtistImg src={imgSrc} alt={name}/>
            <ArtistListArtistName>{name}</ArtistListArtistName>
        </>
    );
}
export default Artist;