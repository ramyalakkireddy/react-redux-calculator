import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class Three extends Component {
  
  render() {
    return (
          <RaisedButton label="3" primary={true} onClick={() => {this.props.actions.inputValue('3')}}/>
    );
  }
}

export default Three;
