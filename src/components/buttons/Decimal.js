import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class Decimal extends Component {

  render() {
    return (
          <RaisedButton label="." primary={true} onClick={() => {this.props.actions.inputValue('.')}}/>
    );
  }
}

export default Decimal;
