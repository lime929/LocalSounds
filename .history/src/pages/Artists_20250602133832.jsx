import ArtistCard from "../components/ArtistCard";
import { artists } from "../data";

export default function Artists() {
    return (
        <div className="artists-page">
            <h1>Local Artists</h1>
            <p>Check out our featured artists and join us for a night of music and fun!</p>
            <div className="artists-grid">
                {artists.map(artist => (
                    <ArtistCard key={artist.id} artist={artist} />
                ))}
            </div>
        </div>
    )
}