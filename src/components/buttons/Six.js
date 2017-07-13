import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class Six extends Component {

  render() {
    return (
          <RaisedButton label="6" primary={true} onClick={() => {this.props.actions.inputValue('6')}}/>
    );
  }
}

export default Six;
