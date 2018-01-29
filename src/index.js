import SC from 'soundcloud';
import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Switch} from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import {Provider} from 'react-redux';

import {history , configureStore} from './stores/configureStore';
import * as actions from './actions';

import Stream from './components/Stream/index';
import Callback from './components/Callback/index';

import { CLIENT_ID, REDIRECT_URI } from './constants/auth';

//init soundcloud
SC.initialize({ client_id: CLIENT_ID, redirect_uri: REDIRECT_URI });

const tracks = [
	{
		title: 'some track',
	},
	{
		title: 'some other track',
	},
];

const store = configureStore({});
store.dispatch(actions.setTracks(tracks));

ReactDOM.render((
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<Switch>
				<Route  exact path="/" component={Stream}/>
				<Route path='/callback' component={Callback} />
			</Switch>
		</ConnectedRouter>
  </Provider>

  ), document.getElementById('app'));

module.hot.accept();

