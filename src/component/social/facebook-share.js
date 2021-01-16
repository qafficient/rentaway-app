import React from "react";
import { FacebookShareButton, FacebookIcon } from "react-share";

const ShareOnFacebook = (props) => {
  return (
    <FacebookShareButton url={props.url}>
      <FacebookIcon size={25} round={true} />
    </FacebookShareButton>
  );
};

export default ShareOnFacebook;
