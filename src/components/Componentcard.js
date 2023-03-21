import { Card } from "antd";
//import {Link} from 'react-router-dom';
export default function card(props) {
  return (
    <div name="component1">
      <Card className="Card"
      hoverable
      cover={<img className="child" alt="example" src={props.data1.imgurl} />}
    >
      <h5>{props.data1.title}</h5>
      <p>{props.data1.discription}</p>
      <p>{props.data1.price}</p>
      {//<Link to="/page2">
}
      <div >
       <strong style={{ color: "#31C0F0" }}>{props.data1.subdisc}</strong>
      </div>
    </Card>   
    </div>
      
  );
}
