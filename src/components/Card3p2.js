import { Card } from "antd";
export default function Pcard(props) {
  return (
    <>
      <Card
        hoverable
        style={{
          width: 350,
          paddingLeft: "0px",
          marginLeft: "0%",
        }}
        cover={
          <img className="child" alt="example" src={props.carddata1.imgurl} />
        }
      >
        <h5>{props.carddata1.title}</h5>
        <p>{props.carddata1.discription}</p>
        <p>{props.carddata1.price}</p>
        <div
          style={{
            backgroundColor: "#F5FCFE",
            padding: "10px",
            paddingLeft: "10px",
          }}
        >
          <strong style={{ color: "#31C0F0" }}>
            {props.carddata1.subdisc}
          </strong>
        </div>
      </Card>
    </>
  );
}
