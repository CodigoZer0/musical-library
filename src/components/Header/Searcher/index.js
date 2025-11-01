import './styles.css';
import lupa from '../../../Assets/lupa.png';
const Searcher = () => {
    return (
        <>
        <article className="header_homesearch"/>
            <div className="header_homesearch-search">
                <img className="header_img" src={lupa} alt="buscar"/> 
                <input type="text" className="header_input" placeholder="¿Qué deseas reproducir?"/>
                
            </div>
        </>
    );

}
export default Searcher;