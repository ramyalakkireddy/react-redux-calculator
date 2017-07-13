import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class Clear extends Component {

  render() {
    return (
          <RaisedButton label="AC" secondary={true} onClick={() => {this.props.actions.clear()}}/>
    );
  }
}

export default Clear;
