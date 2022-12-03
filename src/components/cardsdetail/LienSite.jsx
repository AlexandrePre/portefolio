import PropTypes from "prop-types";
import React from "react";
import web from "../../assets/img/web.png";

function LienSite({ liensite }) {
  return (
    <div className="site">
      <img className="sitelogo" src={web} alt="Git" />
      <a href={liensite}>Lien du site</a>
    </div>
  );
}
LienSite.propTypes = {
  liensite: PropTypes.string.isRequired,
};

export default LienSite;
