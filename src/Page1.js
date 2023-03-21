import "./App.css";
//import react from "react";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Heading from "./components/Heading";
import Card from "./components/Componentcard";
import ColorCard from "./components/Componentcard2";
import FigureCard from "./components/Component3";
import { useNavigate } from "react-router-dom";
import Footer from "./components/Footer";
import {
  Carddata,
  //  colordata,
  figureData,
  headingdata1,
  headingdata2,
  headingdata3,
} from "./Utility/Alldata1";

const Page1 = () => {
  const navigate = useNavigate();
  const goToPage2 = () => {
    navigate("/page2");
  };
  return (
    <>
      <div>
        <Navbar />
        <Slider />
        <div className="title1">
          {headingdata1.map((item, index) => (
            <div>
              <Heading data5={item} />
            </div>
          ))}
        </div>
        <div className="comp1">
          {Carddata.map((item, index) => (
            <div className="subcomp1" onClick={() => goToPage2()}>
              <Card data1={item} onClick={() => goToPage2()} />
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="title2">
          {headingdata2.map((item, index) => (
            <div>
              <Heading data5={item} />
            </div>
          ))}
        </div>
        <div className="comp2">
          <div className="subcomp2">
            <ColorCard />
          </div>
        </div>
        <div>
          <div className="title3">
            {headingdata3.map((item, index) => (
              <div>
                <Heading data5={item} />
              </div>
            ))}
          </div>
          <div className="comp3">
            {figureData.map((item, index) => (
              <div className="subcomp3">
                <FigureCard data3={item} />
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default Page1;
