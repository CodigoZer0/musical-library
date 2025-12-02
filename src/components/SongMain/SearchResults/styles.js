import styled from "styled-components";

const SearchSongsTitle = styled.p`
    margin-top: 20px;
    font-family: ${props => props.theme.fonts.main};
    font-size: 24px;
    color: ${props => props.theme.colors.white};
    align-self: center;
`;
const SearchSongsTopic = styled.div`
    font-family: ${props => props.theme.fonts.main};
    width: calc(100% - 10rem - 20px);
    font-size: 20px;
    color: ${props => props.theme.colors.white};
    margin-top: 5px;
    margin-left: calc(10rem + 30px);
    display: grid;
    grid-template-columns: 1.2fr 1fr 1fr 0.80fr 0.7fr;
    align-items: center;
    gap: 20px;
`;
const SearchSongsContainer = styled.div`
    background-color: #121212;
    width: 100%;
    margin-top: 4px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-height: 620px; 
    overflow-y: auto;
    padding-right: 8px;
    scrollbar-width: thin;
    scrollbar-color: rgba(255,255,255,0.12) transparent;

    &::-webkit-scrollbar {
        width: 10px;
    }
    &::-webkit-scrollbar-track {
        background: transparent;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #ffffff1f;
        border-radius: 10px;
        border: 2px solid transparent;
        background-clip: content-box;
    }
`;

export { 
    SearchSongsTitle,
    SearchSongsTopic,
    SearchSongsContainer 
};