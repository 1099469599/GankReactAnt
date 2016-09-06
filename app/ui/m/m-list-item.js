import React from 'react';

export default React.createClass({

    onItemClick: function(){
        window.open(this.props.url);
    },

    render: function() {
        var item = this.props;
    	if (item != undefined) {
    		return (
                <div className='list-item' onClick={this.onItemClick}>
                    <img className='list-item-image' src={item.imageUrl}/>
                    <div className='list-item-content'>
                        <div className='list-item-top'>
                            <label className='m-list-item-title'>{item.desc}</label>
                        </div>

                        <div className='list-item-bottom'>
                            <label className='m-list-item-who'>{item.who}</label>
                        </div>

                    </div>
                </div>
                
            );
    	}
    }
});