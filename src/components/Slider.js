import React from 'react';
import { Carousel } from 'antd';
const contentStyle = {
  height: '240px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  backgroundColor: '#373435',
  paddingTop: '10px',
  cursor: 'pointer'
};

const slider = () => (
  <Carousel  autoplay >
    <div>
      <div style={{display: "flex"}}>
        <div style={contentStyle}>
            <img className="leftimg" 
             width='450px'
             height='200px'
             style={{borderRadius:'10px'}}
             alt=""
             src="https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_560/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1678365435%2Fed7gmzbh4mrnzq57tdif.jpg"
            />
        </div>
        <div style={contentStyle}>
           <img  className="centerimg" 
             width='450px'
             height='200px'
             style={{borderRadius:'10px'}}
             alt=""
             src="https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_2000/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1677491006%2Fdomerttfen8ds9lkmavj.png"
            />
          </div>
          <div style={contentStyle}>
            <img className="rightimg" 
             width='460px'
             height='200px'
             style={{borderRadius:'10px'}}
             alt=""
             src="https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_560/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1677855486%2Fnih0h4suf9cxmvchvrfi.png"
            />
          </div>  
         </div>
       </div>
       <div>
      <div style={{display: "flex"}}>
        <div style={contentStyle}>
            <img className="leftimg" 
             width='450px'
             height='200px'
             alt=""
             style={{borderRadius:'10px'}}
             src="https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_560/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1677328007%2Flpgwoy3xs9selpsvf4t1.png"
            />
        </div>
        <div style={contentStyle}>
           <img className="centerimg" 
             width='450px'
             height='200px'
             style={{borderRadius:'10px'}}
             alt=""
             src="https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_560/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1677496927%2Fha7mjkz0ttxz4r3qqgwz.jpg"
            />
          </div>
          <div style={contentStyle}>
            <img className="rightimg" 
             width='460px'
             height='200px'
             style={{borderRadius:'10px'}}
             alt=""
             src="https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_560/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1677838744%2Fdh5mvromnhaha5b6gsc1.png"
            />
          </div>  
         </div>
       </div>
       <div>
      <div style={{display: "flex"}}>
        <div style={contentStyle}>
            <img className="leftimg"  
             width='450px'
             height='200px'
             style={{borderRadius:'10px'}}
             alt=""
             src="https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_560/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1678198775%2Fm0lys6cpuqb15ktetwwv.png"
             
            />
        </div>
        <div style={contentStyle}>
           <img className="centerimg"  
             width='450px'
             height='200px'
             style={{borderRadius:'10px'}}
             alt=""
             src="https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_560/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1678365435%2Fed7gmzbh4mrnzq57tdif.jpg"
            />
          </div>
          <div style={contentStyle}>
            <img className="leftimg" 
             width='450px'
             height='200px'
             style={{borderRadius:'10px'}}
             alt=""
             src="https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_2000/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1677491006%2Fdomerttfen8ds9lkmavj.png"
            />
          </div>  
         </div>
       </div>
  </Carousel>
);
export default slider;
