import styled from "styled-components";

const ArtistListLibrary = styled.section`
    width: 100%;
    height: 80%;
    padding: 0;
`; 

const ArtistListArtist = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    gap: 5px;
    flex-direction: row;
    padding: 10px 0px;
    box-sizing: border-box;
    &:hover {
        background-color: #1f1f1f;
        cursor: pointer;
        transition: 0.3s;
        border-radius: 10px;
    }
`;
export { ArtistListLibrary, ArtistListArtist };