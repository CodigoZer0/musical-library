import styled from "styled-components";

const AlbumSongsMainSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 5px;
    height: 80%;
    align-items: flex-start;
    box-sizing: border-box;
`;
const AlbumSongsPlaylistSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 4px;
    box-sizing: border-box;
    width: 33%;
    background-color: #121212;
    color: ${props => props.theme.colors.white};
    border-radius: 10px;
    flex-direction: column;
    height: 90%;
    min-height: 850px;
    padding: 0px 10px;
`;
const AlbumSongsMainLibraryHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-weight: 500;
    padding: 5px 20px;
`;
const AlbumSongsMainLibraryCreate = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
`;
const AlbumSongsMainCreateButton = styled.button`
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
const AlbumSongsMainLibraryExpand = styled.img`
    width: 20px;
    &:hover {
        cursor: pointer;
    }
`;

const AlbumSongsMainLibraryButtons = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    gap: 10px;
    flex-direction: row;
    margin-bottom: auto;
`;
const AlbumSongsMainLibraryButtonClose = styled.button`
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
const AlbumSongsMainLibraryButtonChoose = styled.button`
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

const AlbumSongsMainLibraryPanel = styled.div`
    width: 100%;
    margin-top: 8px;
`; 
//
const AlbumSongsAlbumView = styled.article`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    margin: 4px;
    box-sizing: border-box;
    width: 66%;
    background-color: #121212;
    color: ${props => props.theme.colors.white};
    border-radius: 10px;
    height: 847px;
    overflow-y: auto;
    flex-shrink: 0;
`;

const AlbumSongsAlbumHeaderSection = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    flex-direction: column;
    background-color: #058816a8;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 280px;
    border-radius: 10px;
    flex-shrink: 0;
`;
const AlbumSongsAlbumHeaderContent = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    padding: 0 30px;
    font-weight: 500;
    font-size: 72px;
    align-items: flex-end;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
`;
const AlbumSongsAlbumCoverImg = styled.img`
    width: 120px;
    height: 120px;
    border-radius: 10px;
    margin-right: 20px;
    margin-bottom: 20px;
    object-fit: cover;
    flex-shrink: 0;
`;
const AlbumSongsAlbumHeaderInfo = styled.div`
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 100%;
    padding-bottom: 20px;
    box-sizing: border-box;
    overflow: hidden;
}
`;
const AlbumSongsAlbumInfoHeader = styled.h2`
    margin: 0;
    font-size: 36px;
    color: ${props => props.theme.colors.white};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;
const AlbumSongsAlbumArtistName = styled.p`
    margin: 5px 0 0 0;
    font-size: 18px;
    color: #b3b3b3;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;
const AlbumSongsAlbumYearInfo = styled.p`
    margin: 3px 0 0 0;
    font-size: 14px;
    color: #b3b3b3;
`;

export {
    AlbumSongsMainSection,
    AlbumSongsPlaylistSection,
    AlbumSongsMainLibraryHeader,
    AlbumSongsMainLibraryCreate,
    AlbumSongsMainCreateButton,
    AlbumSongsMainLibraryExpand,
    AlbumSongsMainLibraryButtons,
    AlbumSongsMainLibraryButtonClose,
    AlbumSongsMainLibraryButtonChoose,
    AlbumSongsMainLibraryPanel,
    AlbumSongsAlbumView,
    AlbumSongsAlbumHeaderSection,
    AlbumSongsAlbumHeaderContent,
    AlbumSongsAlbumCoverImg,
    AlbumSongsAlbumHeaderInfo,
    AlbumSongsAlbumInfoHeader,
    AlbumSongsAlbumArtistName,
    AlbumSongsAlbumYearInfo
};