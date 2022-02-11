import React, { Component } from 'react';
import Content from "./Content";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='container'>
          <h3>Sports</h3>
          <div className='card'>
          <Content
              image="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AATsuc4.img?h=1080&w=1920&m=6&q=60&o=f&l=f&x=413&y=85"
              heading="IPL 2022: Multan Sultans coach Andy Flower leaves .... "
              content="'Multan Sultans head coach Andy Flower has left the Pakistan Super League midway and traveled to India ....."
              topicname="Cricket" />
          

          <Content
              image="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AATsuc4.img?h=1080&w=1920&m=6&q=60&o=f&l=f&x=413&y=85"
              heading="IPL 2022: Multan Sultans coach Andy Flower leaves .... "
              content="'Multan Sultans head coach Andy Flower has left the Pakistan Super League midway and traveled to India ....."
              topicname="Cricket" />
            <Content
              image="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AATDpmY.img?h=746&w=1119&m=6&q=60&o=f&l=f&x=496&y=219"
              heading="IIPL 2022 Mega Auctions: "
              content="'Mohammed Kaif Reveals List of Players Who Can Start a Bidding War"
              topicname="Cricket" />
            <Content
              image="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AATDjWz.img?h=588&w=1119&m=6&q=60&o=f&l=f&x=482&y=141"
              heading="‘My Son Isn’t Excited For IPL Mega Auction’"
              content="Raj Bawa’s Dad Slammed For Speaking On His Behalf"
              topicname="Cricket" />
            <Content
              image="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AATDhxD.img?h=213&w=378&m=6&q=60&o=f&l=f&x=206&y=71"
              heading="'Makes no sense to me':"
              content="Fans furious over England's 'unacceptable' decision to drop Anderson, Broad for WI tour"
              topicname="Cricket" />
            <Content
              image="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AATDhxD.img?h=213&w=378&m=6&q=60&o=f&l=f&x=206&y=71"
              heading="'Makes no sense to me':"
              content="Fans furious over England's 'unacceptable' decision to drop Anderson, Broad for WI tour"
              topicname="Cricket" />
              </div>
              
        </div>
      </div>
    );
  }
}

export default App;
