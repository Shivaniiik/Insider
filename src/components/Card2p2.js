import React from "react";
import Card from "antd/es/card/Card";
export default function Card2() {
  return (
    <Card
      title="Event Guide"
      bordered={true}
      style={{
        marginTop: "20px",
      }}
    >
      <p>
        For Age(s) <br /> Family Friendly
      </p>
      <p>Language Hindi</p>
    </Card>
  );
}
