import React from 'react';
import {expect} from 'chai';
import {JSDOM} from 'jsdom';


const {document} = new JSDOM("<!doctype html><html><body></body></html>").window;

global.document = document;
global.window = document.defaultView;

Object.keys(window).forEach(key => {
	if(!(key in global)){
		global[key] = window[key];
	}
});

global.React = React;
global.expect = expect;
