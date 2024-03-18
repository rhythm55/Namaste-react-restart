import { CLOUDINARY_IMAGE_URL } from "../utils/constants";

const RestrauntCardComponent = (props) => {
  const { name, cloudinaryImageId, cuisines, sla, avgRating } = props.resData;

  return (
    <div data-testid="restraunt-card" className="restraunt-card">
      <img
        className="restraunt-card-image"
        src={`${CLOUDINARY_IMAGE_URL}/${cloudinaryImageId}`}
        alt="restraunt logo"
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines}</h4>
      <h4>{avgRating} start</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestrauntCardComponent;

// Higher order component

export const withPromoteLabel = (RestrauntCard) => {
  return (props) => {
    // returns component
    return (
      // component returns jsx
      <>
        <div className="promoted">Promoted</div>
        <RestrauntCard {...props} />
      </>
    );
  };
};
