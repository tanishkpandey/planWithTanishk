import { useState } from "react";
import "./Card.css"; 

function Card({ tour, removeTour }) {
  const { id, image, info, price, name } = tour; 
  const [readmore, setReadmore] = useState(false);
  const description = `${info.substring(0, 200)}....`;

  function readmoreHandler() {
    setReadmore(!readmore);
  }
  function removeTourHandler() {
    removeTour(id);
  }

  return (
    <>
      <div className="card">
        <img src={image} alt={name}></img>

        <div className="tour-info">
          <div className="tour-details">
            <h4 className="tour-price">{price}</h4>
            <h4 className="tour-name">{name}</h4>
          </div>
          <div className="description">
            {description}
            <span className="read-more" onClick={readmoreHandler}>
              {readmore ? "show less" : "read more"}
            </span>
          </div>
        </div>

        <button className="btn-red" onClick={removeTourHandler}>
          Not intrested
        </button>
      </div>
    </>
  );
}

export default Card;
