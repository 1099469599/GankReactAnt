import React from 'react';
import { Link } from 'react-router';
import Menu from 'ui/menu';

import DataList from 'ui/list';
import 'style/app.css';
import 'antd/dist/antd.css';
import 'style/m/common.css';

import MobileList from 'ui/m/m-list';


export default React.createClass({
    render: function() {
        return (
            <div>
                <MobileList />
            </div>
        )
    }
});