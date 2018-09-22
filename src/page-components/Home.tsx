import * as React from 'react';
import { Title } from 'src/layout-components/Title';

class Home extends React.Component {
  // constructor() {

  // }
  render() {
    return (
      <React.Fragment>
        <Title title=" - Hem" />
        <section>
          <h1>Hem</h1>
          <div className="contactperson">
            <div className="contactimg">
              {/* <img src={contactperson} /> */}
            </div>
            <div className="header">Välkommen</div>
            {/* <p><img alt="" src={phone} />+46 08 985 25 85</p> */}
            {/* <p><img alt="" src={email} />fastighetsforvaltare@tival.com</p> */}
          </div>
        </section>
      </React.Fragment >
    )
  }
}

export default Home;