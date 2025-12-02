import styled from "styled-components";

const HeaderContainer = styled.header`
    width: 35%;
    display: flex;
    margin: 0 30%;
    margin-top: 10px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    box-sizing: border-box;
    gap: 20px;
`;
const HeaderTitle = styled.h1`
    font-size: 24px;
    font-weight: ${props => props.theme.fontsWeights.bold};
`;
const HeaderImg = styled.img`
    width: 80px;
    height: auto;
    
`;

export { 
    HeaderContainer, 
    HeaderTitle, 
    HeaderImg
};