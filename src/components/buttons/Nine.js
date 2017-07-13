import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class Nine extends Component {

  render() {
    return (
          <RaisedButton label="9" primary={true} onClick={() => {this.props.actions.inputValue('9')}}/>
    );
  }
}

export default Nine;
