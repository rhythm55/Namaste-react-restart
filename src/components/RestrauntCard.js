import { CLOUDINARY_IMAGE_URL } from "../utils/constants";

export default RestrauntCardComponent = (props) => {
    const {name, cloudinaryImageId, cuisines, sla, avgRating} = props.resData;
    return (
      <div className="restraunt-card">
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