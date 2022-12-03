import PropTypes from "prop-types";
import React from "react";

function Description({ description }) {
  return (
    <div className="description">
      <p>{description}</p>
    </div>
  );
}
Description.propTypes = {
  description: PropTypes.string.isRequired,
};

export default Description;
