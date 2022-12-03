import data from "../tools/data";
import CardsItem from "./CardsItem";
import "../Home.css";

function Cards() {
  const cardMap = data.map((cardItem) => (
    <CardsItem
      img={cardItem.img}
      cardName={cardItem.cardName}
      imgFace={cardItem.imgFace}
      id={cardItem.id}
      cardNameBlack={cardItem.cardNameBlack}
      newsNameBlack={cardItem.newsNameBlack}
    />
  ));

  return <div className="carreau">{cardMap}</div>;
}

export default Cards;
