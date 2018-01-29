import React from 'react';

class Callback extends React.Component {

  componentDidMount() {
  	window.setTimeout(()=>{document.querySelector('.page').textContent='i change this'},2000 )
   // window.setTimeout(opener.SC.connectCallback, 1);
  }

  render() {
    return <div className='page'><p>This page should close soon.</p></div>;
  }
}

export default Callback;