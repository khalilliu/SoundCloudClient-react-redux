import React from 'react';
import ReactDOM from 'react-dom';

import Stream from './components/Stream';

const title = 'My React Webpack Babel Setup';

const tracks = [
	{
		title: 'some track',
	},
	{
		title: 'some other track',
	},
];

ReactDOM.render(
	<div>
		<Stream tracks={tracks} /> 
	</div>,
	document.getElementById('app'),
);

module.hot.accept();

