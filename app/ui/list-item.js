import React from 'react';
import 'style/list.css';

export default React.createClass({

    render: function() {
        var item = this.props;
    	if (item != undefined) {
    		return (
                <div className='list-item'>
                    <div className='list-item-title'>{item.desc}</div>
                    <div className='list-item-who'>{item.who}</div>
                    <div className='list-item-type'>{item.type}</div>
                    <div className='list-item-time'>{item.createdAt}</div>
                </div>
            );
    	}
    }
});