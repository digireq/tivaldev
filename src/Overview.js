import React, { Component } from 'react';
import ProgressbarCost from 'react-circular-progressbar';
import ProgressbarDone from 'react-circular-progressbar';

const percentageDone = 66;
const totalCost = 40;

class Overview extends Component {
    render() {
        return (
            <section>
                <h1>Översikt</h1>
                <div className="objectsummary">
                    <h2>BRF Blåsippan - Lgh 1008</h2>
                    <p>Tillvalsprocess</p>
                    {/* <ProgressbarCost
                    percentage={totalCost}
                    text={`${totalCost}%`}
                    strokeWidth={12}
                    initialAnimation
                    styles={{
                    path: { stroke: `rgba(8, 78, 138, 1), ${totalCost / 100})` },
                    text: { fill: '#084e8a', fontSize: '1rem' },
                    trail: { stroke: 'transparent' },
                    }}
                    /> */}
                    <ProgressbarDone
                    percentage={percentageDone}
                    text={`${percentageDone}%`}
                    strokeWidth={12}
                    initialAnimation
                    styles={{
                    path: { stroke: `rgba(164, 219, 127, 1), ${percentageDone / 100})` },
                    text: { fill: '#a4db7f', fontSize: '1.25rem' },
                    trail: { stroke: 'transparent' },
                    }}
                    />
                    <div className="costsummary">
                    <h4>Tillvalskostnad</h4>
                    <p>97 230 SEK</p>
                    </div>
                    <div className="costsummary">
                    <h4>Kvar till nästa rabattnivå</h4>
                    <p><b>2 475 SEK</b></p>
                    </div>
                </div>
            </section>
        );
    }
  }

  export default Overview;