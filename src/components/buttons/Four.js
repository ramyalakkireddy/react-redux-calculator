import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class Four extends Component {

  render() {
    return (
          <RaisedButton label="4" primary={true} onClick={() => {this.props.actions.inputValue('4')}}/>
    );
  }
}

export default Four;
