// import contactperson from './images/contactperson.png';
// import phone from './images/phone.png';
// import email from './images/email.png';
import { Component } from 'react';
import * as React from 'react';
import { Title } from 'src/layout-components/Title';

// interface IProps {}

class Contact extends Component {
  render() {

    return (
      <React.Fragment>
        <Title title="- Kontakt" />
        <section>
          <Title title="- Kontakt" />
          <h1>Kontakt</h1>
          <div className="contactperson">
            <div className="contactimg">
              {/* <img src={contactperson} /> */}
            </div>
            <div className="header">Fastighetsförvaltare</div>
            {/* <p><img alt="" src={phone} />+46 08 985 25 85</p> */}
            {/* <p><img alt="" src={email} />fastighetsforvaltare@tival.com</p> */}
          </div>
          <div className="contactperson">
            <div className="contactimg">
              {/* <img src={contactperson} /> */}
            </div>
            <div className="header">Projektledare</div>
            {/* <p><img alt="" src={phone} />+46 08 123 12 23</p> */}
            {/* <p><img alt="" src={email} />projekt.ledare@tival.com</p> */}
          </div>
        </section>
      </React.Fragment >
    )
    // return (
    // <section>
    //   <Title title="- Kontakt"/>
    //   <h1>Kontakt</h1>
    //   <div className="contactperson">
    //     <div className="contactimg">
    //       {/* <img src={contactperson} /> */}
    //     </div>
    //     <div className="header">Fastighetsförvaltare</div>
    //     {/* <p><img alt="" src={phone} />+46 08 985 25 85</p> */}
    //     {/* <p><img alt="" src={email} />fastighetsforvaltare@tival.com</p> */}
    //   </div>
    //   <div className="contactperson">
    //     <div className="contactimg">
    //       {/* <img src={contactperson} /> */}
    //     </div>
    //     <div className="header">Projektledare</div>
    //     {/* <p><img alt="" src={phone} />+46 08 123 12 23</p> */}
    //     {/* <p><img alt="" src={email} />projekt.ledare@tival.com</p> */}
    //   </div>
    // </section>
    // );
  }
}

export default Contact;