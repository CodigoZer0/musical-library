import styled from "styled-components";

const SongSection = styled.section `
    display: grid;
    grid-template-columns: 10rem 1.2fr 1fr 1fr 0.7fr 0.7fr;
    align-items: center;
    width: 100%;
    padding: 10px;
    border-bottom: 1px solid #353535;
    box-sizing: border-box;
    gap: 20px;
`;

const SongImageContainer = styled.div `
    width: 8rem;
    height: 8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #282828;
    border-radius: 5px;
    overflow: hidden;
`;
const SongImage = styled.img `
    width: 100%;
    height: 100%;
    border-radius: 5px;
    object-fit: cover;
`;

const SongImagePlaceHolder = styled.div `
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #404040;
    color: #b3b3b3;
    font-size: 12px;
    text-align: center;
    padding: 10px;
    box-sizing: border-box;
`;

const SongTitle = styled.h2 `
    font-size: 1.5rem;
    font-weight: ${props => props.theme.fontsWeights.regular};
    color: ${props => props.theme.colors.white};
    margin: 0;
`;

const SongArtist = styled.p `
    font-size: 1rem;
    color: ${props => props.theme.colors.white};
    margin: 0;
`;

const SongAlbum = styled.p `
    font-size: 1rem;
    color: ${props => props.theme.colors.white};
    margin: 0;
`;

const SongDuration = styled.p `
    font-size: 1rem;
    color: ${props => props.theme.colors.white};
    margin: 0;
`;

const SongAddContainer = styled.div `
    position: relative;
    display: inline-block;
    width: fit-content;
`;
const SongAddButton = styled.button `
    background-color: transparent;
    border: none;
    cursor: pointer;
`;
const AddButtonImage = styled.img `
    width: 20px;
    height: 20px;
`;

const TooltipText = styled.span `
     /* Posicionamiento Flotante */
    position: absolute;
    z-index: 10; /* Asegura que flote por encima de otros elementos */

    /* Posición (Aparece ARRIBA y CENTRADO del botón) */
    bottom: 100%; /* Lo mueve justo por encima del borde superior del contenedor. */
    left: 50%;
    transform: translateX(-50%); /* Lo centra horizontalmente. */
    margin-bottom: 5px; /* Pequeño espacio entre el botón y el tooltip. */

    /* Estilos Visuales (Similar a la imagen que enviaste) */
    background-color: #333; /* Fondo oscuro */
    color: #fff; /* Texto blanco */
    padding: 6px 12px;
    border-radius: 4px;
    white-space: nowrap; /* Evita que el texto se rompa en varias líneas */
    font-size: 14px;

    /* Ocultamiento por Defecto */
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.3s; /* Transición suave para la aparición */
    &:hover {
    visibility: visible;
    opacity: 1;
    }
`;

export {
    SongSection,
    SongImageContainer,
    SongImage,
    SongImagePlaceHolder,
    SongTitle,
    SongArtist,
    SongAlbum,
    SongDuration,
    SongAddContainer,
    SongAddButton,
    AddButtonImage,
    TooltipText
}
