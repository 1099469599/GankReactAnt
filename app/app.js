import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from 'store';

// Layouts
import App from 'layouts/app';

// Components
import Android from 'ui/list';
import iOS from 'ui/test';
import Frontend from 'ui/frontend';
import Apps from 'ui/list';
import Expand from 'ui/list';
import Recommend from 'ui/list';
import Video from 'ui/list';
import Nice from 'ui/list';
import All from 'ui/list';

ReactDOM.render((
    <Provider store={store}>
        <Router history={browserHistory}>

            <Route component={App}>
            	<Route path="/" component={Android}/>
				<Route path="/android" component={Android}/>
				<Route path="/ios" component={iOS}/>
				<Route path="/frontend" component={Frontend}/>
				<Route path="/apps" component={Apps}/>
				<Route path="/expand" component={Expand}/>
				<Route path="/recommend" component={Recommend}/>
				<Route path="/video" component={Video}/>
				<Route path="/nice" component={Nice}/>
				<Route path="/all" component={All}/>
            </Route>

        </Router>
    </Provider>
), document.getElementById('root'));