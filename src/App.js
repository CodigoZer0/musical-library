import Header from "./components/header";
import Song from "./components/song";
import './styles/app.css';
//Importar imagenes de las canciones
import song1_img from './img/song1.jpg';
import song2_img from './img/song2.jpg';
import song3_img from './img/song3.jpg';
import song4_img from './img/song4.jpg';
//Importar imagenes de los artistas
import artist1_img from './img/theweeknd.jpg';
import artist2_img from './img/daftpunk.jpg';
import artist3_img from './img/bbnos.jpg';
import artist4_img from './img/siames.jpg';
import artist5_img from './img/coldplay.jpg';
import artist6_img from './img/esteman.jpg';
//Importar iconos
import mas from './img/mas.png';
import expandir from './img/expandir.png';
import close from './img/x.png';

function App() {
  return (
    <div>
      <Header />
      
      <div className="main_section">
        <div className="playlist_section">
          <div className="main_library-header">
                <p>Tu biblioteca</p>
                <div className="main_library-create">
                    <button className="create_button"><img className="create_button-icon" src={mas} alt=""/>Crear</button>
                    <img className="main_library_expand" src={expandir} alt=""/>
                </div>                
            </div>
            <div className="main_library-buttons">
                <button className="main_library-buttons-close"><img className="close-img" src={close} alt="logo para cerrar"/></button>
                <button className="main_library-buttons-choose">Artistas</button>
            </div>
            <div className="main_library-artists">
                <div className="main_library-artist">
                    <img className="main_library-artist-img" src={artist1_img} alt=""/>
                    <p className="main_library-artist-name">The Weeknd</p>
                </div>
                <div className="main_library-artist">
                    <img className="main_library-artist-img" src={artist2_img} alt=""/>
                    <p className="main_library-artist-name">bbno$</p>
                </div>
                <div className="main_library-artist">
                    <img className="main_library-artist-img" src={artist3_img} alt=""/>
                    <p className="main_library-artist-name">Daft Punk</p>
                </div>
                <div className="main_library-artist">
                    <img className="main_library-artist-img" src={artist4_img} alt=""/>
                    <p className="main_library-artist-name">SIAMES</p>
                </div>
                <div className="main_library-artist">
                    <img className="main_library-artist-img" src={artist5_img} alt=""/>
                    <p className="main_library-artist-name">Coldplay</p>
                </div>
                <div className="main_library-artist">
                    <img className="main_library-artist-img" src={artist6_img} alt=""/>
                    <p className="main_library-artist-name">Esteman</p>
                </div>
                
            </div>

        </div>
        <div className="songs_container">
          <Song image={song1_img} title="Open Hearts" artist="The Weeknd" album="Hurry Up Tomorrow" duration="3:54" />
          <Song image={song2_img} title="Digital Love" artist="Daft Punk" album="Discovery" duration="5:01" />
          <Song image={song3_img} title="Gigolo" artist="bbno$" album="gigolo" duration="1:58" />
          <Song image={song4_img} title="Golden" artist="HUNTR/X" album="Golden" duration="3:15" />
        </div>
      </div>
    </div>
  );
}

export default App;
