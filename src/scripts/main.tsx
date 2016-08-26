/// <reference path="../../typings/react/react.d.ts"/>
/// <reference path="../../typings/react-dom/react-dom.d.ts"/>

import '../css/style.styl';
import * as ReactDOM from 'react-dom';
import * as React from 'react';

const StorePicker = React.createClass({
  render: function() {
    return (
      <p>hi</p>
    );
  }
});

ReactDOM.render(<StorePicker/>, document.querySelector('#main'));
