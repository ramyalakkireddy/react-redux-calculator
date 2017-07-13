import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class One extends Component {

  render() {
    return (
          <RaisedButton label="1" primary={true} onClick={()=>{this.props.actions.inputValue('1')}}/>
    );
  }
}

export default One;
