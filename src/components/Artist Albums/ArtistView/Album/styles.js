import styled from "styled-components";

const AlbumTopMusicAlbum = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    padding: 10px 0px;
    gap: 20px;
`;
const AlbumTopMusicAlbumCover = styled.img`
    width: 100px;
    padding: 0px 10px;
`;
const AlbumSongName = styled.div`
    width: 70%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    text-align: left;
    font-size: 2rem;
`;
const AlbumSongNameName = styled.p`
    font-weight: 600;
    color: #fff;
    font-family: "Anton", sans-serif;
    margin: 5px 0;
    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`;
const AlbumSongNameArtist = styled.p`
    font-weight: 500;
    font-size: 1.3rem;
    color: #b3b3b3;
    font-family: "Anton", sans-serif;
    margin: 5px 0;
`;
const AlbumSongInfo = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 200px;
    flex-direction: row;
`;
const AlbumSongInfoYear = styled.p`
    align-self: flex-end;
    text-align: start;
    font-size: 20px;
`;

export {
    AlbumTopMusicAlbum,
    AlbumTopMusicAlbumCover,
    AlbumSongName,
    AlbumSongNameName,
    AlbumSongNameArtist,
    AlbumSongInfo,
    AlbumSongInfoYear
};  