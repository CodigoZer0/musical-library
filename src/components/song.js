import React, {Component} from 'react';
import '../styles/app.css';

class Song extends Component {
	constructor(props){
		super(props);
		this.state = {
			
		};
	}

	componentDidMount() {
		console.log('Song component mounted');
	}

	render() {
		return (
			<section className="song">
				<img src={this.props.image} alt={this.props.title} className="song_image" />
				<h2 className="song_title">{this.props.title}</h2>
				<p className="song_artist">{this.props.artist} </p>
				<p className="song_album">{this.props.album}</p>
				<p className='song_duration'>{this.props.duration}</p>
			</section>
		);
	}
}

export default Song;
