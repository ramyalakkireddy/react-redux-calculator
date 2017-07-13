import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { grey500 } from 'material-ui/styles/colors';
import { orange500 } from 'material-ui/styles/colors';
import * as actions from './actions/CalculatorActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TextField from 'material-ui/TextField';
import One from './components/buttons/One';
import Two from './components/buttons/Two';
import Three from './components/buttons/Three';
import Four from './components/buttons/Four';
import Five from './components/buttons/Five';
import Six from './components/buttons/Six';
import Seven from './components/buttons/Seven';
import Eight from './components/buttons/Eight';
import Nine from './components/buttons/Nine';
import Zero from './components/buttons/Zero';
import Decimal from './components/buttons/Decimal';
import Add from './components/buttons/Add';
import Subtract from './components/buttons/Subtract';
import Multiply from './components/buttons/Multiply';
import Divide from './components/buttons/Divide';
import Equal from './components/buttons/Equal';
import Clear from './components/buttons/Clear';
import './App.css';

const muiTheme = getMuiTheme({
  palette: {
    primaryColor: grey500,
    secondaryColor: orange500
  }
});
 
class App extends Component {

  render() {

    const {displayValue} = this.props

    return (
  		<MuiThemeProvider muiTheme={muiTheme}>
  		<div className="App">
        <h1> Simple Calculator </h1>
        <TextField id="result" value={displayValue || ''}/>
        <div>
          <Seven {...this.props}/>
          <Eight {...this.props}/>
          <Nine {...this.props}/>
          <Multiply {...this.props}/>
        </div>
        <div>
          <Four {...this.props}/>
          <Five {...this.props}/>
          <Six {...this.props}/>
          <Subtract {...this.props}/>
        </div>
        <div>
          <One {...this.props}/>
          <Two {...this.props}/>
          <Three {...this.props}/>
          <Add {...this.props}/>
        </div>
        <div>
          <Decimal {...this.props}/>
          <Zero {...this.props}/>
          <Equal {...this.props}/>
          <Divide {...this.props}/>
        </div>
        <div>
        <Clear {...this.props}/>
       </div>
      </div>
      </MuiThemeProvider>
    );
  }
}

function mapStateToProps(state) {
  return {
    displayValue: state.displayValue
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
