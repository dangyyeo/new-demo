import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Resume from './routes/Resume';

function RouterConfig({ history }) {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/" exact component={IndexPage} />
                <Route path="/app" exact component={Resume} />
            </Switch>
        </Router>
    );
}

export default RouterConfig;
