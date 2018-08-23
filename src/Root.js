import React, { Component } from 'react';
import SimpleSlider from './MainCategorySlider';
import SimpleSlider2 from './SubCategorySlider';
import Switch from "react-switch";
import ProgressbarCost from 'react-circular-progressbar';
import ProgressbarDone from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const percentageDone = 66;
const totalCost = 40;

class App extends Component {
  constructor() {
    super();
    this.state = { checked: true };
    this.handleChange = this.handleChange.bind(this);
    
  }
 
  handleChange(checked) {
    this.setState({ checked });
  }

  render() {
    return (
      <div className="container">
        <header><img src={process.env.PUBLIC_URL + '/images/tival-logo-rgb-white.png'} alt="" /></header>
        <section>
          {/* <div className="objectsummary">
            <h2>BRF Blåsippan - Lgh 1008</h2>
            <div className="costsummary">
              <img alt="" src={process.env.PUBLIC_URL + '/images/totalcost.png'} />
              <p>97 230 SEK</p>
            </div>
            <div className="costsummary">
              <img alt="" src={process.env.PUBLIC_URL + '/images/discount.png'} />
              <p>2 475 SEK</p>
            </div>
            <br />
            <p>Tillvalsprocess</p>
            <ProgressbarCost
            percentage={totalCost}
            text={`${totalCost}%`}
            strokeWidth={12}
            initialAnimation
            styles={{
              path: { stroke: `rgba(8, 78, 138, 1), ${totalCost / 100})` },
              text: { fill: '#084e8a', fontSize: '1rem' },
              trail: { stroke: 'transparent' },
            }}
            />
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
          </div> */}
          <br /><br /><br /><br /><br /><br /><br />
          <h2>Rumväljare</h2>
          <SimpleSlider />
          <br /><br /><br /><br /><br /><br /><br />
          <h2>RUM: KÖK</h2>
          <SimpleSlider2 />
          {/* Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text. It's a convenient tool for mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout. Lorem ipsum is mostly a part of a Latin text by the classical author and philosopher Cicero. Its words and letters have been changed by addition or removal, so to deliberately render its content nonsensical; it's not genuine, correct, or comprehensible Latin anymore. While lorem ipsum's still resembles classical Latin, it actually has no meaning whatsoever. As Cicero's text doesn't contain the letters K, W, or Z, alien to latin, these, and others are often inserted randomly to mimic the typographic appearence of European languages, as are digraphs not to be found in the original.
          In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual content still not being ready. Think of a news blog that's filled with content hourly on the day of going live. However, reviewers tend to be distracted by comprehensible content, say, a random text copied from a newspaper or the internet. The are likely to focus on the text, disregarding the layout and its elements. Besides, random text risks to be unintendedly humorous or offensive, an unacceptable risk in corporate environments. Lorem ipsum and its many variants have been employed since the early 1960ies, and quite likely since the sixteenth century.
          like MS Word or Lotus Notes generate random lorem text when needed, either as pre-installed module or plug-in to be added. Word selection or sequence don't necessarily match the original, which is intended to add variety. Presentation software like Keynote or Pages use it as a samples for screenplay layout. Content management software as Joomla, Drupal, Mambo, PHP-Nuke, WordPress, or Movable Type offer Lorem Ipsum */}
        </section>
        
        <div className="fullwidthbtn">Välj KÖK</div> 
        <div className="fullwidthbtn">Välj KÖK</div> 
        {/* <section>
          <img src={process.env.PUBLIC_URL + '/images/filter.png'} alt="" />
          <label htmlFor="normal-switch">
            <Switch
              onChange={this.handleChange}
              checked={this.state.checked}
              height={18}
              width={50}
              offColor="#c9c9c9"
              onColor="#064e8a"
              uncheckedIcon={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    color: "white",
                    paddingRight: 2,
                    fontSize: "10px",
                  }}
                >
                  Dölj
                </div>
              }
              checkedIcon={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    color: "white",
                    paddingLeft: 2,
                    fontSize: "10px",
                  }}
                >
                  Visa
                </div>
              }
              id="normal-switch"
            />
          </label>
        </section>*/}
        {/* <footer>Copyright 2018 - Tival AB</footer> */}
      </div>
    );
  }
}

export default App;