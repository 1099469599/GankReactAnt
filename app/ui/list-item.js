import React from 'react';

export default React.createClass({
    render: function() {
    	if (this.props.results == undefined) {
    		return(<div>empty</div>);
    	}
    	console.log('length = '+this.props.results.length);
    	
        return (
            <div className="users-page">
                <h1>App: Users</h1>
                <ul>
                    {this.props.results.map((item, i) => {
                        return (
                            <li key={item._id}>{item.desc}</li>
                        );
                    })}
                </ul>
            </div>
        )
    }
});