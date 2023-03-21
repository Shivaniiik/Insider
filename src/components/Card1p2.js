import React from "react";
import Card from "antd/es/card/Card";
export default function Card1() {
  return (
    <Card hoverable>
      <h2> AR Rahman Concert for Feeding Smiles | Pune </h2>
      <p>Music Concerts</p>
      <p>April 30 | Gates Open at 6PM</p>
      <p>₹999 onwards</p>
      <div style={{ backgroundColor: "#F5FCFE", padding: "10px" }}>
        <strong style={{ color: "#31C0F0", margin: 0 }}>
          Step out and enjoy this event
        </strong>
      </div>
    </Card>
  );
}
