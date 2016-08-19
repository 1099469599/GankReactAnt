import React from 'react';
import {Button} from 'antd';
import store from 'store';


export default React.createClass({
	onClick: function() {
		console.log('click');
		store.dispatch({
            type: 'ANDROID',
            text: 'android~~'
        })
	},
	render: function() {
		return (
			<Button type="primary" onClick={this.onClick}>Primary</Button>
		);
	}
});


