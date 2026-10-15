export default function Shops({ shop }) {
  return (
    <div className="shopCard">
      <img
        src={shop.image}
        alt={shop.name}
        className="shopImage"
      />
      <div className="shop-header">
        <div className="shop-info">
          <h3 className="shopName">{shop.name}</h3>
          <p className="shopLocation">{shop.location}</p>
        </div>
      </div>
      <p className="shopBio">{shop.bio}</p>
    </div>
  );
}