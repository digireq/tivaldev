// import React, { Component } from 'react';
// import ProgressbarCost from 'react-circular-progressbar';
// import ProgressbarDone from 'react-circular-progressbar';

// const percentageDone = 66;
// const totalCost = 40;

// class Overview extends Component {
//     render() {
//         return (
//             <section>
//                 <h1>Översikt</h1>
//                 <h2>BRF Blåsippan - Lgh 1008</h2>
//                 <div className="objectsummary">
                    
//                     <h3>Tillvalsprocess</h3>
//                     {/* <ProgressbarCost
//                     percentage={totalCost}
//                     text={`${totalCost}%`}
//                     strokeWidth={12}
//                     initialAnimation
//                     styles={{
//                     path: { stroke: `rgba(8, 78, 138, 1), ${totalCost / 100})` },
//                     text: { fill: '#084e8a', fontSize: '1rem' },
//                     trail: { stroke: 'transparent' },
//                     }}
//                     /> */}
//                     <ProgressbarDone
//                     percentage={percentageDone}
//                     text={`${percentageDone}%`}
//                     strokeWidth={12}
//                     initialAnimation
//                     styles={{
//                     path: { stroke: `rgba(164, 219, 127, 1), ${percentageDone / 100})` },
//                     text: { fill: '#a4db7f', fontSize: '1.25rem' },
//                     trail: { stroke: 'transparent' },
//                     }}
//                     />
//                     <div className="costsummary">
//                     <h4>Tillvalskostnad</h4>
//                     <p>97 230 SEK</p>
//                     </div>
//                     <div className="costsummary">
//                     <h4>Rabatter</h4>
//                     <p>12 540 SEK</p>
//                     </div>
//                     <div className="costsummary">
//                     <h4>Kvar till nästa rabattnivå</h4>
//                     <p>2 475 SEK</p>
//                     <button>Rabattnivåer?</button>
//                     </div>
//                 </div>
//                 <h3>Datum</h3>
//                 <p>Tillvalsprocessen stängs 2018-12-01<br /><br />Sista datum för att godkänna och signera avtalen är 2018-12-10</p>
//                 <button>Granska avtal</button>
//             </section>
//         );
//     }
//   }

//   export default Overview;