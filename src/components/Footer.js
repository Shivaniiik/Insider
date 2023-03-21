import React from "react";

export default function FootF() {
  return (
    <div>
      <>
        <div className="footer-container">
          <div className="Left-container ">
            <div className="upper-container">
              <div>
                <img className="footerimg" src="logo.png" width="100" height="40" />
                <br></br>
                <p className="disp" style={{ marginTop: "30px" }}>
                  Paytm Insider is a platform that helps you discover and buy
                  the best in events,travel and food in your city. We strive to
                  curate experiences that are worth your time and money,
                  possibly something you have never tried before.
                </p>
              </div>
            </div>
            <div className="lower-container" style={{ marginTop: "30px" }}>
              <strong style={{ color: "lightblue" }}>
                FOR EVENT ORGANIZERS
                <br />
              </strong>
              <p>
                Paytm Insider is built by the same team that created Bacardi NH7
                Weekender (us) and we sure know what goes into putting together
                a great experience. Our technology, marketing and customer
                support can help you build a community of not just ticket
                buyers, but also fans.
              </p>
            </div>
          </div>

          <div className="right-container">
            <div
              className="rightupper-container"
              style={{ marginTop: "115px" }}
            >
              <p>About Us  Blog FAQs  Terms & Conditions  Privacy policy </p>
              <p>Careers Contact Us</p>
            </div>
            <div className="rightlower-container">
              List with us Company events
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
