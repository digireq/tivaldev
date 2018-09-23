// import React, { Component } from 'react';

// import Slider from "react-slick";

// class SimpleSlider2 extends Component {
//     render() {
//       var settings = {
//         //infinite: false,
//         centerMode: true, // - (Gilad, 20.2.17) - we wanted it but it doesn't work for some reason...
//         draggable: true,
//         speed: 800,
//         slidesToShow: 5, //changes on responsive
//         slidesToScroll: 1,
//         responsive: [
//             {breakpoint: 768, settings: {autoplay: false, slidesToShow: 3}},
//             {breakpoint: 500, settings: {autoplay: false, slidesToShow: 1}}
//         ],
//         dots: false,
//         centerPadding: 0,
//         fade: false,
//         arrows: true,
//         variableHeight: true
//       };
//       return (
//         <Slider {...settings}>
//           <div>
//             <h3>KAKEL</h3>
//             <img src={process.env.PUBLIC_URL + '/images/kitchen.png'} alt="" />
//             <button className="done">&#10003;</button>
//           </div>
//           <div>
//             <h3>KLINKER</h3>
//             <img src={process.env.PUBLIC_URL + '/images/living.png'} alt="" className="done" />
//             <button className="">&#10003;</button>
//           </div>
//           <div>
//             <h3>TVÄTTSTÄLL</h3>
//             <img src={process.env.PUBLIC_URL + '/images/bath1.png'} alt="" />
//             <button className="done">&#10003;</button>
//           </div>
//           <div>
//             <h3>HANDDUKSTORK</h3>
//             <img src={process.env.PUBLIC_URL + '/images/bath2.png'} alt="" />
//             <button className="">&#10003;</button>
//           </div>
//           <div>
//             <h3>BLANDARE</h3>
//             <img src={process.env.PUBLIC_URL + '/images/bed1.png'} alt="" />
//             <button className="">&#10003;</button>
//           </div>
//           <div>
//             <h3>DUSCHBLANDARE</h3>
//             <img src={process.env.PUBLIC_URL + '/images/bed2.png'} alt="" className="done" />
//             <button className="done">&#10003;</button>
//           </div>
//         </Slider>
//       );
//     }
//   }

//   export default SimpleSlider2;