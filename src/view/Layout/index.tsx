import * as React from 'react';
import HeaderComponent from './components/Header';
import { Route, Switch } from 'react-router-dom';
import Routes from './_child_routes';
import ErrorPage from '../404/index';
import './index.scss';

class View extends React.Component {
  public render() {
    return (
      <div>
        <HeaderComponent />
        <Switch>
          {
            Routes.map((v, i) => (
              <Route 
                key={i}
                path={v.path}
                exact={v.path === '/' ? true : false}
                component={v.component}
              />
            ))
          }
          <Route component={ErrorPage} />
        </Switch>
      </div>
    )
  }
}

export default View