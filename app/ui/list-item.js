import React from 'react';
import 'style/list.css';

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
                            <label className='list-item-title'>{item.desc}</label>
                            <label className='list-item-type'>{item.type}</label>
                        </div>

                        <div className='list-item-bottom'>
                            <label className='list-item-who'>{item.who}</label>
                            <label className='list-item-time'>{item.publishedAt}</label>
                        </div>

                    </div>
                </div>
                
            );
    	}
    }
});