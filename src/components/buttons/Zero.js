import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class Zero extends Component {

  render() {
    return (
          <RaisedButton label="0" primary={true} onClick={() => {this.props.actions.inputValue('0')}}/>
    );
  }
}

export default Zero;
