import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class Add extends Component {
  render() {
    return (
          <RaisedButton label="+" secondary={true} onClick={() => {this.props.actions.inputValue('+')}}/>
    );
  }
}

export default Add;
