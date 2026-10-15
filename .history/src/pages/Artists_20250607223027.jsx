import ArtistCard from "../components/ArtistCard";
import { artists } from "../data";
import artistsBg from '../assets/artist-bg.jpg';

export default function Artists() {
    return (
        <div className="artists-page">
                  <div className="img-overlay">
            <div className="page-hero">
                <img 
                    src={artistsBg} 
                    alt="Concert crowd" 
                    className="hero-bg" 
                />
                <div className="hero-content">
                    <h1>Local Artists</h1>
                    <p>Discover the amazing talent in our local music scene</p>
                </div>
            </div>
            </div>
            <div className="container">
                <div className="artists-grid">
                    {artists.map(artist => (
                        <ArtistCard key={artist.id} artist={artist} />
                    ))}
                </div>
            </div>
        </div>
    )
}