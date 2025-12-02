import styled from "styled-components";

const ArtistListArtistImg = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: 0 10px;
    object-fit: cover;
`;
const ArtistListArtistName = styled.p`
    font-weight: 400;
    font-size: 22px;
    color: ${props => props.theme.colors.white};
    font-family: ${props => props.theme.fonts.main};
`;
export {
    ArtistListArtistImg,
    ArtistListArtistName
};