import styled from "styled-components";
import { Link } from "react-router-dom";

const PlaylistListContainer = styled.div`
    background: #0f0f0f;
    color: #fff;
    padding: 10px;
    padding-bottom: 500px;
    border-radius: 6px;
    margin-top: 10px;
`;
const PlaylistListTitle = styled.h4`
    margin: 0 0 8px 0;
`;
const PlaylistListUl = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;
const PlaylistListItem = styled.li`
    padding: 6px 0;
    border-bottom: 1px solid rgba(255,255,255,0.04);
    display: flex;
    align-items: center;
`;
const PlaylistListName = styled(Link)`
    background: transparent;
    border: none;
    color: ${props => props.theme.colors.white};
    font-size: 14px;
    text-align: left;
    cursor: pointer;
    padding: 6px 8px;
    &:hover {
        background: #ffffff08;
        border-radius: 6px;
    }
`;

export { 
    PlaylistListContainer,
    PlaylistListTitle,
    PlaylistListUl,
    PlaylistListItem,
    PlaylistListName

 };