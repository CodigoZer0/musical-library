import styled from "styled-components";

const ArtistAlbumsMainSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 5px;
    height: 80%;
    align-items: flex-start;
    box-sizing: border-box;
`;
const ArtistAlbumsPlaylistSection = styled.div`
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
const ArtistAlbumsMainLibraryHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-weight: 500;
    padding: 5px 20px;
`;
const ArtistAlbumsMainLibraryCreate = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
`;
const ArtistAlbumsMainCreateButton = styled.button`
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
const ArtistAlbumsMainLibraryExpand = styled.img`
    width: 20px;
    &:hover {
        cursor: pointer;
    }
`;

const ArtistAlbumsMainLibraryButtons = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    gap: 10px;
    flex-direction: row;
    margin-bottom: auto;
`;
const ArtistAlbumsMainLibraryButtonClose = styled.button`
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
const ArtistAlbumsMainLibraryButtonChoose = styled.button`
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

const ArtistAlbumsMainLibraryPanel = styled.div`
    width: 100%;
    margin-top: 8px;
`; 

export {
    ArtistAlbumsMainSection,
    ArtistAlbumsPlaylistSection,
    ArtistAlbumsMainLibraryHeader,
    ArtistAlbumsMainLibraryCreate,
    ArtistAlbumsMainCreateButton,
    ArtistAlbumsMainLibraryExpand,
    ArtistAlbumsMainLibraryButtons,
    ArtistAlbumsMainLibraryButtonClose,
    ArtistAlbumsMainLibraryButtonChoose,
    ArtistAlbumsMainLibraryPanel
}; 