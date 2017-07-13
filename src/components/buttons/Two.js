import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class Two extends Component {

  render() {
    return (
          <RaisedButton label="2" primary={true} onClick={() => {this.props.actions.inputValue('2')}}/>
    );
  }
}

export default Two;
