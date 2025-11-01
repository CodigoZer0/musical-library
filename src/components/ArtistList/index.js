import React from 'react';
import Artist from './Artist';
import "./styles.css"
import artist1_img from './../../Assets/theweeknd.jpg';
import artist2_img from './../../Assets/daftpunk.jpg';
import artist3_img from './../../Assets/bbnos.jpg';
import artist4_img from './../../Assets/siames.jpg';
import artist5_img from './../../Assets/coldplay.jpg';
import artist6_img from './../../Assets/esteman.jpg';

const ArtistList = () => {
    const artists = [
        { index: 1, imgSrc: artist1_img, name: "The Weeknd" },
        { index: 2, imgSrc: artist2_img, name: "Daft Punk" },
        { index: 3, imgSrc: artist3_img, name: "bbno$" },
        { index: 4, imgSrc: artist4_img, name: "Siames" },
        { index: 5, imgSrc: artist5_img, name: "Coldplay" },
        { index: 6, imgSrc: artist6_img, name: "Esteman" },
    ]
    return (
        <section className="main_library-artists">
            {
                artists.map(artist => (
                  <div className='main_library-artist'>
                    <Artist imgSrc={artist.imgSrc} name={artist.name} />
                  </div>  
                ))
            }
        </section>
    )
}
export default ArtistList;