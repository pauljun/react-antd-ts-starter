import * as React from 'react';
import HeaderComponent from './components/Header';
import { Route, Switch } from 'react-router-dom';
import Routes from './_child_routes';
import ErrorPage from '../404/index';
import { inject, observer } from 'mobx-react';
import './index.scss';

export interface IProps {
  history: object;
  UserStore?: object;
}

@inject('UserStore')
@observer
class View extends React.Component<IProps, object> {
  public render() {
    console.log(this.props.UserStore)
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