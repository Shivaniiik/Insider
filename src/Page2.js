import React from "react";
import Navbar from "./components/Navbar";
import Componentimg from "./components/Comp1p2";
import Component1 from "./components/P2Component1";
import Card1 from "./components/Card1p2";
import Card2 from "./components/Card2p2";
import Pcard from "./components/Card3p2";
import P2component3 from "./components/Lastcomponent";
import Footer from "./components/Footer";
import "./App.css";
import { Pagecard1 } from "./Utility/Alldata2";

export default function page2() {
  return (
    <>
      <Navbar />
      <div style={{ display: "flex" }}>
        <div>
          <Componentimg />
          <Component1 />
        </div>
        <div className="containerright">
          <Card1 />
          <Card2 />
          <p style={{ marginTop: "20px", marginLeft: "20px" }}>
            <span style={{ fontWeight: "bold" }}>Invite your friends</span>
            <br />

            <span>and enjoy a shared experience</span>
          </p>
        </div>
      </div>

      <div style={{ align: "center", marginLeft: "70px" }}>
        <div
          className="heading1"
          style={{
            align: "center",
            padding: "0px",
            marginLeft: "100px",
            margin: "50px",
            lineHeight: "1",
            marginBottom: "0px",
          }}
        >
          <strong style={{ color: "black", margin: "0" }}>
            <p
              style={{
                fontSize: "large",
                fontWeight: "bold",
                fontStretch: "30px",
              }}
            >
              YOU MAY LOVE THESE TOO{" "}
            </p>
          </strong>
        </div>
        <div
          style={{
            display: "flex",
            marginLeft: "20px",
            marginTop: "0px",
            cursor: "pointer",
            marginBottom: "0px",
          }}
        >
          {Pagecard1.map((item, index) => (
            <div style={{ marginLeft: "30px" }}>
              <Pcard carddata1={item} />
            </div>
          ))}
        </div>
      </div>
      <P2component3 />
      <Footer />
    </>
  );
}
