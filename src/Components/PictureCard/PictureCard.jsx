import fifa from "../../Assets/fifa.png";

const PictureCard = ({ title, imageUrl, description }) => {
  return (
    <div className="card">
      <img src={fifa} alt={title} />
    </div>
  );
};

export default PictureCard;
