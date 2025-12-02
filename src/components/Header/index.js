import logo from './../../Assets/logo.png';
import Searcher from './Searcher/index.js';
import { HeaderContainer, HeaderImg, HeaderTitle } from './styles.js';
const Header = () => {
        return(
            <HeaderContainer>
                <HeaderTitle>Biblioteca Musical</HeaderTitle>
                <HeaderImg src={logo} alt="Logo de la Biblioteca Musical" />
                <Searcher />
            </HeaderContainer>
        )

}

export default Header;