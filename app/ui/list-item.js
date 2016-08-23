import React from 'react';

export default React.createClass({

    render: function() {
        var item = this.props;
    	if (item != undefined) {
    		return (
                <li>
                    {item.desc}
                </li>
            );
    	}
    }
});