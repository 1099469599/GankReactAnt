import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from 'store';

// Layouts
import Main from 'layouts/main'
import App from 'layouts/app';

// Components
import List from 'ui/list';

ReactDOM.render((
    <Provider store={store}>
        <Router history={browserHistory}>

            <Route component={Main}>
            	<Route path="/" component={List}/>
				<Route path="/android" component={List}/>
				<Route path="/ios" component={List}/>
				<Route path="/frontend" component={List}/>
				<Route path="/apps" component={List}/>
				<Route path="/expand" component={List}/>
				<Route path="/recommend" component={List}/>
				<Route path="/video" component={List}/>
				<Route path="/nice" component={List}/>
				<Route path="/all" component={List}/>
            </Route>

        </Router>
    </Provider>
), document.getElementById('root'));