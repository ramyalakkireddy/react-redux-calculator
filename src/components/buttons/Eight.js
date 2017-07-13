import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';


class Eight extends Component {
  render() {
    return (
          <RaisedButton label="8" primary={true} onClick={() => {this.props.actions.inputValue('8')}}/>
    );
  }
}

export default Eight;
