import PropTypes from "prop-types";
import React from "react";

function Language({ logo1, logo2, logo3, logo4, logo5, logo6, logo7 }) {
  return (
    <div className="language">
      <img className="logo" src={logo1} alt="logo" />
      <img className="logo" src={logo2} alt="logo" />
      <img className="logo" src={logo3} alt="logo" />
      <img className="logo" src={logo4} alt="logo" />
      <img className="logo" src={logo5} alt="logo" />
      <img className="logo" src={logo6} alt="logo" />
      <img className="logo" src={logo7} alt="logo" />
    </div>
  );
}
Language.propTypes = {
  logo1: PropTypes.string.isRequired,
  logo2: PropTypes.string.isRequired,
  logo3: PropTypes.string.isRequired,
  logo4: PropTypes.string.isRequired,
  logo5: PropTypes.string.isRequired,
  logo6: PropTypes.string.isRequired,
  logo7: PropTypes.string.isRequired,
};

export default Language;
