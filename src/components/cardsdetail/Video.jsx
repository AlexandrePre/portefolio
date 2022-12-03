import PropTypes from "prop-types";
import React from "react";

function Video({ video }) {
  return (
    <div className="video">
      <video loop autoPlay muted id="Video">
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
}
Video.propTypes = {
  video: PropTypes.string.isRequired,
};

export default Video;
