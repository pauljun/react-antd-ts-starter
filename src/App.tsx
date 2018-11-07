import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'mobx-react';
import AppRoutes from './_router';
import stores from './store/index';

class App extends React.Component {
  public render() {
    return (
      <div className='wrapper'>
        <Provider {...stores}>
          <Router>
            <Switch>
              {AppRoutes.map((v, index) => (
                <Route
                  key={index}
                  path={v.path}
                  component={v.component}
                />
              ))}
            </Switch>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
