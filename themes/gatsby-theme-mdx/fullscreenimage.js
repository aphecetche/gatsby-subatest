import React from "react";
import BackgroundImage from "gatsby-background-image";
import PropTypes from "prop-types";

const FullScreenImage = ({ children, className, img }) => {
  return (
    <BackgroundImage
      Tag="section"
      className={className}
      fluid={img}
      backgroundColor={`#040e18`}
    >
      {children}
    </BackgroundImage>
  );
};

FullScreenImage.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  img: PropTypes.object,
};

export default FullScreenImage;
