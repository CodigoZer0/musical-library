
import logo from './../../Assets/logo.png';
import './styles.css';
import Searcher from './Searcher/index.js';
const Header = () => {
        return(
            <header className="header">
                <h1 className="header_title">Biblioteca Musical</h1>
                <img className="header_img" src={logo} alt="Logo de la Biblioteca Musical" />
                <Searcher />
            </header>
        )

}

export default Header;