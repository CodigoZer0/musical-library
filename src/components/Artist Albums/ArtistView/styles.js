import styled from "styled-components";

const ArtistViewMain = styled.article`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 4px;
    box-sizing: border-box;
    width: 66%;
    background-color: #121212;
    color: #fff;
    border-radius: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    min-height: 730px;
    overflow-y: auto;
`;
const ArtistViewLoading = styled.div`
`;
const ArtistViewError = styled.div`
`;
const ArtistViewPhoto = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    justify-content: flex-end;
    align-items: flex-start;
    flex-direction: column;
    background-color: #058816a8;
    background-repeat: no-repeat;
        background-size: cover;
    width: 100%;
    height: 300px;
    border-radius: 10px;
`;
const ArtistViewPhotoName = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    padding: 0 20px;
    font-weight: 500;
    font-size: 72px;
    p {
        margin: 0;
    }
`;
const ArtistViewPhotoImg = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 75px;
    margin-right: 20px;
`;
const ArtistViewMusic = styled.div`
    padding: 20px;
    gap: 10px;
    width: 100%;
    box-sizing: border-box;
`;
const ArtistViewMusicOptions = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 30px;
`;
const ArtistViewMusicOptionsPlay = styled.img`
    width: 60px;
    &:hover {
        cursor: pointer;
        transform: scale(1.05);
    }
`;
const ArtistViewMusicOptionsMenu = styled.img`
    width: 30px;
    &:hover {
        cursor: pointer;
        transform: scale(1.05);
    }   
`;
const ArtistViewMusicPopular = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
    align-items: flex-start;
    flex-direction: column;
    gap: 10px;
    padding: 10px 20px;
    font-weight: 700;
    font-size: 30px;
}
`;
const ArtistViewTopMusic = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    align-items: center;
    flex-direction: column;
    padding: 0px 10px;
    font-weight: 500;
    font-size: 14px;
    color: #b3b3b3;
    gap: 10px;
    max-height: calc(640px - 325px);
    overflow-y: auto;
`;
const ArtistViewAlbumItem = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 15px;
`;
const ArtistViewAlbumIndex = styled.p`
    padding-right: 3px;
    min-width: 30px;
    text-align: center;
`;

export {
    ArtistViewMain,
    ArtistViewLoading,
    ArtistViewError,
    ArtistViewPhoto,
    ArtistViewPhotoName,
    ArtistViewPhotoImg,
    ArtistViewMusic,
    ArtistViewMusicOptions,
    ArtistViewMusicOptionsPlay,
    ArtistViewMusicOptionsMenu,
    ArtistViewMusicPopular,
    ArtistViewTopMusic,
    ArtistViewAlbumItem,
    ArtistViewAlbumIndex,
};