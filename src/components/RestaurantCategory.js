import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItem, setShowItemIndex }) => {
  const handleClick = () => {
    setShowItemIndex();
  };

  return (
    <div
      data-testid="res-accordion"
      className="accordion"
      onClick={() => handleClick()}
    >
      <div className="accordion-title">
        <div>{data.title}</div> <div>⬇️</div>
      </div>
      <div className="accordion-body">
        {data.itemCards.map(
          (item) =>
            showItem && (
              <ItemList key={item.card.info.id} item={item.card.info} />
            )
        )}
      </div>
    </div>
  );
};

export default RestaurantCategory;
