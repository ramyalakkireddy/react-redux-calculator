import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class Seven extends Component {

  render() {
    return (
          <RaisedButton label="7" primary={true} onClick={() => {this.props.actions.inputValue('7')}}/>
    );
  }
}

export default Seven;
