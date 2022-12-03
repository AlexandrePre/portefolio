import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import "../Home.css";

function CardsItem({
  img,
  cardName,
  imgFace,
  id,
  cardNameBlack,
  newsNameBlack,
}) {
  const [onHover, setOnHover] = useState(true);
  const [onImg, setOnImg] = useState(imgFace);
  const [onName, setOnName] = useState(cardName);
  const [onNameBlack, setOnNameBlack] = useState(cardNameBlack);

  const onhover = () => {
    setOnHover(!onHover);
    if (onHover === true) {
      setOnImg(imgFace);
      setOnName(cardName);
      setOnNameBlack(cardNameBlack);
    } else {
      setOnImg(img);
      setOnName(newsNameBlack);
      setOnNameBlack(newsNameBlack);
    }
  };

  return (
    <Link to={`/cards/${id - 1}`}>
      <div className="CardItem">
        <h2 className="blanc"> {onName}</h2>
        <h2 className="black"> {onNameBlack}</h2>

        <img
          onMouseEnter={onhover}
          className="imgFace"
          src={onImg}
          alt="face"
          role="presentation"
        />
      </div>
    </Link>
  );
}

CardsItem.propTypes = {
  img: PropTypes.string.isRequired,
  cardName: PropTypes.string.isRequired,
  imgFace: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  cardNameBlack: PropTypes.string.isRequired,
  newsNameBlack: PropTypes.string.isRequired,
};

export default CardsItem;
