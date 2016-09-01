import React from 'react';
import { Link, browserHistory } from 'react-router';
import App from 'layouts/app';
import MobileApp from 'layouts/m/m-app'

export default React.createClass({

    getInitialState: function() {
        return {
            isMobile: false
        }
        
     },
    componentDidMount: function() {
        var userAgentInfo = navigator.userAgent;  
        var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");  
        for (var v = 0; v < Agents.length; v++) {  
            if (userAgentInfo.indexOf(Agents[v]) > 0) {
                this.setState({isMobile: true});
                break;
            }  
        }
    },

    render: function() {
        if (this.state.isMobile) {
            return (<MobileApp />)
        } else {
            return (<App />)
        }
    }
});