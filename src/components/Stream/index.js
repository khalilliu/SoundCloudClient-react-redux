import React from 'react';
import {connect} from 'react-redux';
import Stream from './presenter';

const mapStateToProps = state => ({
	tracks: state.track
});

export default connect(mapStateToProps)(Stream);