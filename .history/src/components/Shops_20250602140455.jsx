export default function Shops() {
    return (
        <>
         <div className="artistCard">
      <img
        src={shops.image}
        alt={`${shops.name}`}
        className="artistImage"
      />
      <h3 className="artistName">{shops.name}</h3>
      <p className="artistBio">{shops.bio}</p>
    </div>
        </>
    )
}