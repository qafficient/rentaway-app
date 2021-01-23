import React from "react";
import { TwitterShareButton, TwitterIcon } from "react-share";

const ShareOnTwiiter = (props) => {
  return (
    <TwitterShareButton url={props.url}>
      <TwitterIcon size={25} round={true} />
    </TwitterShareButton>
  );
};

export default ShareOnTwiiter;
