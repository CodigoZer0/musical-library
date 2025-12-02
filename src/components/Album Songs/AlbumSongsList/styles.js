import styled from "styled-components";

const AlbumListLoading = styled.div`
    padding: 30px 20px;
    text-align: center;
    color: #b3b3b3;
    font-size: 14px;
`;
const AlbumListError = styled.div`
    padding: 30px 20px;
    text-align: center;
    color: #b3b3b3;
    font-size: 14px;
`;
const AlbumListSongContainer = styled.div`
    width: 100%;
    padding: 15px 20px;
    color: ${props => props.theme.colors.white};
    box-sizing: border-box;
    overflow-y: auto;
    flex: 1;
`;
const AlbumListHeader = styled.h3`
    font-size: 18px;
    font-weight: ${props => props.theme.fontsWeights.bold};
    margin-bottom: 15px;
    margin-top: 0;
`;
const AlbumListSongsList = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
`;
const AlbumListSongsHeader = styled.div`
    display: grid;
    grid-template-columns: 50px 1fr 80px;
    gap: 15px;
    padding: 8px 0;
    border-bottom: 1px solid #404040;
    font-weight: 700;
    font-size: 12px;
    color: #b3b3b3;
    margin-bottom: 8px;
    box-sizing: border-box;
`;
const AlbumListSongsNumber = styled.p`
    text-align: center;
    color: #b3b3b3;
    margin: 0;
    font-size: 12px;
`;
const AlbumListSongsTitle = styled.p`
    margin: 0;
    font-size: 13px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;
const AlbumListSongsDuration = styled.p`
    text-align: right;
    color: #b3b3b3;
    margin: 0;
    font-size: 12px;
`;
const AlbumListSongItem = styled.div`
    display: grid;
    grid-template-columns: 50px 1fr 80px;
    gap: 15px;
    align-items: center;
    padding: 8px 0;
    border-radius: 5px;
    transition: background-color 0.2s;
    box-sizing: border-box;
    &:hover {
        background-color: #282828;
        cursor: pointer;
    }
`;
const AlbumListNoSongs = styled.p`
    padding: 20px;
    text-align: center;
    color: #b3b3b3;
    font-size: 14px;
`;
export {
    AlbumListLoading,
    AlbumListError,
    AlbumListSongContainer,
    AlbumListHeader,
    AlbumListSongsList,
    AlbumListSongsHeader,
    AlbumListSongsNumber,
    AlbumListSongsTitle,
    AlbumListSongsDuration,
    AlbumListSongItem,
    AlbumListNoSongs,
};