import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class Equal extends Component {
  render() {
    return (
          <RaisedButton label="=" primary={true} onClick={()=>{this.props.actions.getResult()}}/>
    );
  }
}

export default Equal;
