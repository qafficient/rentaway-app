import React from "react";
import { 
    WhatsappShareButton, WhatsappIcon
 } from "react-share";

const ShareOnWhatsApp = (props) => {
  return (
    <WhatsappShareButton url={props.url}>
      <WhatsappIcon size={25} round={true} />
    </WhatsappShareButton>
  );
};

export default ShareOnWhatsApp;
