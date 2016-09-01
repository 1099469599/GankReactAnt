import React from 'react';
import { Link, browserHistory } from 'react-router';
import Menu from 'ui/menu';
import List from 'ui/list';

import 'style/app.css';
import 'antd/dist/antd.css';


export default React.createClass({

    render: function() {
        return (
          <div>
            <div className="top-layout">top</div>
                <div className="main-layout">
                        <div className="menu-layout">
                            <Menu />
                        </div>
                        <div id="content-layout" className="content-layout">
                            <List />
                        </div>
                    </div>  
            </div>       
            )      
    }
});