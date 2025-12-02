import styled from "styled-components";

const ChoosenMainSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 5px;
    height: 80%;
    align-items: flex-start;
    box-sizing: border-box;
`;
const ChoosenPlaylistSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 4px;
    box-sizing: border-box;
    width: 33%;
    background-color: #121212;
    color: #fff;
    border-radius: 10px;
    flex-direction: column;
    height: 90%;
    min-height: 850px;
    padding: 0px 10px;
`;
const ChoosenMainLibraryHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-weight: 500;
    padding: 5px 20px;
`;
const ChoosenMainLibraryCreate = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
`;
const ChooseMainCreateButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: start;
    color: ${props => props.theme.colors.white};
    background-color: #1f1f1f;
    border-radius: 20px;
    padding: 10px;
    gap: 10px;
    border: none;
    font-weight: 500;
    font-family: ${props => props.theme.fonts.main};
    .create_button-icon {
        width: 20px;
        height: 20px;
    }
    &:hover {
        background-color: #333333;
        transition: 0.3s;
        cursor: pointer;
    }
`;
const ChooseMainLibraryExpand = styled.img`
    width: 20px;
    &:hover {
        cursor: pointer;
    }
`;

const ChoosenMainLibraryButtons = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    gap: 10px;
    flex-direction: row;
    margin-bottom: auto;
`;
const ChoosenMainLibraryButtonClose = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    background-color: #1f1f1f;
    border-radius: 50%;
    border: 10px solid #1f1f1f;
    .close-img {
        width: 12px;
    }
    &:hover {
        cursor: pointer;
        background-color: ${props => props.theme.colors.secondary};
        transition: 0.3s;
        border: 10px solid ${props => props.theme.colors.secondary};;
    }

`;
const ChoosenMainLibraryButtonChoose = styled.button`
    background-color: ${props => props.theme.colors.white};
    color: #262626ff;
    border: none;
    border: 7px solid ${props => props.theme.colors.white};
    border-radius: 20px;
    font-family: ${props => props.theme.fonts.main};
    font-weight: ${props => props.theme.fontsWeights.light};
    &:hover {
        background-color: #ededed;
        transition: 0.3s;
        border: 7px solid #ededed;
        cursor: pointer;
    }
`;

const ChoosenMainLibraryPanel = styled.div`
    width: 100%;
    margin-top: 8px;
`; 

//Diferencias entre los archivos

const ChoosenSongDetailContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    margin: 4px;
    box-sizing: border-box;
    width: 66%;
    background-color: #121212;
    color: #fff;
    border-radius: 10px;
    height: 620px;
    padding: 30px;
    overflow-y: auto;
`;
const ChoosenSongDetailHeader = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 40px;
    width: 100%;
    margin-bottom: 40px;
`;
const ChoosenSongDetailImage = styled.img`
    width: 220px;
    height: 220px;
    border-radius: 15px;
    object-fit: cover;
    box-shadow: 0 8px 24px #00000080;
`;
const ChoosenSongDetailInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex: 1;
`;
const ChoosenSongDetailTitle = styled.h2`
    margin: 0 0 15px 0;
    font-size: 48px;
    color: #fff;
`;
const ChoosenSongDetailArtist = styled.p`
    margin: 0 0 10px 0;
    font-size: 24px;
    color: #1DB954;
    font-weight: 500;
`;
const ChoosenSongDetailAlbum = styled.p`
    margin: 8px 0;
    font-size: 16px;
    color: #b3b3b3;
`;
const ChoosenSongDetailDuration = styled.p`
    margin: 8px 0;
    font-size: 16px;
    color: #b3b3b3
`;
const ChoosenSongDetailActions = styled.div`
    display: flex;
    gap: 20px;
    justify-content: flex-start;
    width: 100%;

`;
const ChoosenSongActionButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 24px;
    &.play_button {
        background-color: #1ed760;
        color: ${props => props.theme.colors.white};
        &:hover {
            background-color: #1ed760;
            transform: scale(1.05);
        }
        img {
            width: 24px;
            height: 24px;
        }    
    }
    &.add_button {
        background-color: #282828;
        color: ${props => props.theme.colors.white};
        font-size: 28px;
        &:hover {
            background-color: #333333;
            transform: scale(1.05);
        }
        &.saved {
            background-color: #1db954;
            color: ${props => props.theme.colors.white};
        }
    }
`;
export {
    ChoosenMainSection,
    ChoosenPlaylistSection,
    ChoosenMainLibraryHeader,
    ChoosenMainLibraryCreate,
    ChooseMainCreateButton,
    ChooseMainLibraryExpand,
    ChoosenMainLibraryButtons,
    ChoosenMainLibraryButtonClose,
    ChoosenMainLibraryButtonChoose,
    ChoosenMainLibraryPanel,
    ChoosenSongDetailContainer,
    ChoosenSongDetailHeader,
    ChoosenSongDetailImage,
    ChoosenSongDetailInfo,
    ChoosenSongDetailTitle,
    ChoosenSongDetailArtist,
    ChoosenSongDetailAlbum,
    ChoosenSongDetailDuration,
    ChoosenSongDetailActions,
    ChoosenSongActionButton
}