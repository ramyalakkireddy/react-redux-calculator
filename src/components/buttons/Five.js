import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class Five extends Component {

  render() {
    return (
          <RaisedButton label="5" primary={true} onClick={() => {this.props.actions.inputValue('5')}}/>
    );
  }
}

export default Five;
