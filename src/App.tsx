import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import AppRoutes from './router';
// import IndexView from './view/Index/index';
import NotFoundView from './view/404/index';
import Layout from './view/Layout/index';

class App extends React.Component {
  public render() {
    return (
      <div className='wrapper'>
        <BrowserRouter>
          <Switch>
            <Route path='/:module' component={Layout} />
            <Route component={NotFoundView} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
