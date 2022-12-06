import { useParams } from "react-router-dom";
import data from "../tools/data";
import "../Home.css";
import Video from "./cardsdetail/Video";
import Titre from "./cardsdetail/Titre";
import Description from "./cardsdetail/Description";
import LienGit from "./cardsdetail/LienGit";
import LienSite from "./cardsdetail/LienSite";
import Language from "./cardsdetail/Language";

function CardsDetail() {
  const { id } = useParams();

  return (
    <div className="cardsdetail">
      <Video video={data[id].video} />
      <Titre
        cardName={data[id].cardName}
        txt={data[id].txt}
        titre={data[id].titre}
      />
      <Description description={data[id].description} />
      <LienGit liengit={data[id].lienGit} />
      <LienSite liensite={data[id].lienSite} />
      <Language
        logo1={data[id].logo1}
        logo2={data[id].logo2}
        logo3={data[id].logo3}
        logo4={data[id].logo4}
        logo5={data[id].logo5}
        logo6={data[id].logo6}
        logo7={data[id].logo7}
      />
    </div>
  );
}

export default CardsDetail;
