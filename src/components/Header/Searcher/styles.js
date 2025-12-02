import styled from "styled-components";

const SearcherHomeSearch = styled.article`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 10px;
`;
const SearcherHomeSearchForm = styled.form`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    padding: 0px 10px;
    width: 20%;
    height: 100%;
    flex-grow: 1;
    background-color: #1f1f1f;
    border: 7px solid #1f1f1f;
    border-radius: 30px;
`;
const SearcherInput = styled.input`
    width: 400px;
    height: 100%;
    padding: 15px;
    background-color: #1f1f1f;
    border-radius: 10px;
    border: none;
    color: ${props => props.theme.colors.white};
    font-size: 16px;
    font-weight: 400;
    font-family: ${props => props.theme.fonts.main};

`;
const SearcherButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
`;
const SearcherImg = styled.img`
    width: 25px;
    margin: 0;
`;

export {
    SearcherHomeSearch,
    SearcherHomeSearchForm,
    SearcherInput,
    SearcherButton,
    SearcherImg
};