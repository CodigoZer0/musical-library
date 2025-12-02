import styled from "styled-components";

const MainContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 20px;
`;

const MainPlaylistSection = styled.div`
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
const MainLibraryHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-weight: 500;
    padding: 5px 20px;
`;
const MainLibraryCreate = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
`;
const MainLibraryCreateButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: start;
    color: #fff;
    background-color: #1f1f1f;
    border-radius: 20px;
    padding: 10px;
    gap: 10px;
    border: none;
    font-weight: 500;
    font-family: "Anton", sans-serif;
    & .create_button-icon {
        width: 20px;
        height: 20px;
    }
    &:hover {
        background-color: #333333;
        transition: 0.3s;
        cursor: pointer;
    }
}

`;
const MainLibraryExpand = styled.img`
    width: 20px;
    &:hover {
        cursor: pointer;
    }
`;
const MainLibraryButtons = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    gap: 10px;
    flex-direction: row;
    margin-bottom: auto;
`;
const MainLibraryButtonsClose = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    background-color: #1f1f1f;
    border-radius: 50%;
    border: 10px solid #1f1f1f;
    & .close-img {
        width: 12px;
    }
    &:hover {
        cursor: pointer;
        background-color: #333333;
        transition: 0.3s;
        border: 10px solid #333333;
    }
`;
const MainLibraryButtonsChoose = styled.button`
    background-color: ${props => props.theme.colors.white};
    color: #121212;
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
const MainLibraryPanel = styled.div`
    width: 100%;
    margin-top: 8px;
`;
const MainSection = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 5px;
    height: 80%;
    align-items: flex-start;
    box-sizing: border-box;
`;

export { 
    MainContainer, 
    MainPlaylistSection, 
    MainLibraryHeader, 
    MainLibraryCreate, 
    MainLibraryCreateButton, 
    MainLibraryExpand,
    MainLibraryButtons,
    MainLibraryButtonsClose,
    MainLibraryButtonsChoose,
    MainLibraryPanel,
    MainSection
};  