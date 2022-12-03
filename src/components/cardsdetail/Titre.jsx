import PropTypes from "prop-types";
import React from "react";

function Titre({ titre, txt }) {
  return (
    <div className="titre">
      <h1>{titre}</h1>
      <h2>{txt}</h2>
    </div>
  );
}
Titre.propTypes = {
  titre: PropTypes.string.isRequired,
  txt: PropTypes.string.isRequired,
};

export default Titre;
