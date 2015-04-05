'use strict';

import React from 'react';

// import router from './router';
//
// router.run((Handler, state) => {
//   React.render(<Handler {...state} />, document.body);
// });

// let ComponentX = 

export default React.createClass({
  render() {
    return React.DOM.h1({}, this.props.name)
  }
});
