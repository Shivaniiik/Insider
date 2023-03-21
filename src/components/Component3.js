export default function figure(props) {
  return (
    <>
      <div>
        <div
          className="FigureCard">
        
          <img className="child3" alt="example" src={props.data3.imgurl} />
        </div>

        <div className="child4" style={{ align: "center" }}>
          <h5 style={{ padding: "10px", paddingBottom: "0px" }}>
            {" "}
            {props.data3.title}{" "}
          </h5>
          <p style={{ paddingTop: "0px" }} className="event">
            {" "}
            {props.data3.events}
          </p>
        </div>
      </div>
    </>
  );
}
