import * as React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import AppRoutes from './_router';
// import IndexView from './view/Index/index';
import NotFoundView from './view/404/index';

class App extends React.Component {
  public render() {
    return (
      <div className='wrapper'>
        <Router>
          <Switch>
            {
              AppRoutes.map((v, i) =>
                <Route
                  key={i}
                  exact={v.exact ? v.exact : false}
                  path={v.path}
                  component={v.component}
                />
              )
            }
            <Route
              component={NotFoundView}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
