import PropTypes from "prop-types";
import React from "react";
import git from "../../assets/img/github.png";

function LienGit({ liengit }) {
  return (
    <div className="Git">
      <img className="gitlogo" src={git} alt="Git" />
      <a href={liengit}>Lien dépot GitHub</a>
    </div>
  );
}
LienGit.propTypes = {
  liengit: PropTypes.string.isRequired,
};

export default LienGit;
