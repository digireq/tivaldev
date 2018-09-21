// import React, { Component } from 'react';
// import Slider from "react-slick";
// import kitchen from './images/kitchen.jpg';

// class SimpleSlider extends Component {
//     render() {
//       var settings = {
//         //infinite: false,
//         centerMode: true, // - (Gilad, 20.2.17) - we wanted it but it doesn't work for some reason...
//         draggable: true,
//         speed: 500,
//         slidesToShow: 1, //5!! changes on responsive
//         slidesToScroll: 1,
//         // responsive: [
//         //     {breakpoint: 768, settings: {autoplay: false, slidesToShow: 3}},
//         //     {breakpoint: 500, settings: {autoplay: false, slidesToShow: 1}}
//         // ],
//         dots: false,
//         centerPadding: 0,
//         fade: false,
//         arrows: false,
//         variableHeight: true,
//       };
//       return (
//         <Slider {...settings}>
//           <div>
//             {/* <h3>KÖK</h3> */}
//             <img src={kitchen} alt="" />
//             <button className="done">&#10003;</button>
//           </div>
//           <div>
//             <h3>VARDAG</h3>
//             <img src={process.env.PUBLIC_URL + '/images/living.png'} alt="" className="done" />
//             <button className="">&#10003;</button>
//           </div>
//           <div>
//             <h3>TOALETT 1</h3>
//             <img src={process.env.PUBLIC_URL + '/images/bath1.png'} alt="" />
//             <button className="done">&#10003;</button>
//           </div>
//           <div>
//             <h3>TOALETT 2</h3>
//             <img src={process.env.PUBLIC_URL + '/images/bath2.png'} alt="" />
//             <button className="">&#10003;</button>
//           </div>
//           <div>
//             <h3>SOV 1</h3>
//             <img src={process.env.PUBLIC_URL + '/images/bed1.png'} alt="" />
//             <button className="">&#10003;</button>
//           </div>
//           <div>
//             <h3>SOV 2</h3>
//             <img src={process.env.PUBLIC_URL + '/images/bed2.png'} alt="" className="done" />
//             <button className="done">&#10003;</button>
//           </div>
//         </Slider>
//       );
//     }
//   }

//   export default SimpleSlider;