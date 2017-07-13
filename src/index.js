import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import injectTapEventPlugin from 'react-tap-event-plugin';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import CalculatorReducer from './reducers/CalculatorReducer';

const store = createStore(CalculatorReducer,
				compose(
				    applyMiddleware(thunk),
				    window.devToolsExtension ? window.devToolsExtension() : f => f
				  )
				);
// Needed for onTouchTap
injectTapEventPlugin();

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, document.getElementById('root'));
registerServiceWorker();
