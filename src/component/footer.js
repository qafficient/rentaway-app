import React, {Component} from "react";
import { MDBContainer, MDBFooter } from "mdbreact";
import ShareOnTwiiter from "./social/twitter-share";
import ShareOnFacebook from "./social/facebook-share";
import ShareOnWhatsApp from "./social/whatsapp-share";
import { Link } from 'react-router-dom';


const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://rentaway.in"> RentAway: Rent Anything, India</a>
        </MDBContainer>
      </div>
      <div>
        <ShareOnTwiiter url={window.location.href} />
        <ShareOnFacebook url={window.location.href} />
        <ShareOnWhatsApp url={window.location.href} />
      </div>
      <div>
        <MDBContainer fluid>
          <div class="footer-links">
            <p>For a safe rental</p>
            <Link to="/datausage">Data usage protection</Link>
            <Link to="/lenderprotection">Lender Protection Guide</Link>
          </div>

          <div class="footer-links">
            <p>More about us</p>
            <Link to="/termsandconditions">Terms and Conditions</Link>
            <Link to="aboutus">About Us</Link>
            <Link to="contactus">Contact Us</Link>
          </div>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default FooterPage;
