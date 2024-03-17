import { CLOUDINARY_IMAGE_URL } from "../utils/constants";

const ItemList = (props) => {
  const item = props.item;
  return (
    <div className="menu-item">
      <div className="display-flex">
        <div className="menu-item-details">
          <p className={item.isVeg === 1 ? "green" : "red"}></p>
          <h1>{item.name}</h1>
          <p>{item.price}</p>
          <p>{item.description}</p>
        </div>
        <div className="menu-item-image">
          <img
            src={`${CLOUDINARY_IMAGE_URL},h_208,c_fit/${item.imageId}`}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default ItemList;
