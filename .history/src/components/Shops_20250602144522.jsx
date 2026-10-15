export default function Shops({shop}) {
    return (
        <>
         <div className="artistCard">
      <img
        src={shop.image}
        alt={`${shop.name}`}
        className="artistImage"
      />
      <h3 className="artistName">{shop.name}</h3>
      <p className="artistBio">{shop.bio}</p>
    </div>
        </>
    )
}