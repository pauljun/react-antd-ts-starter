import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppRoutes from './_router';

class App extends React.Component {
  public render() {
    return (
      <div className='wrapper'>
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
      </div>
    );
  }
}

export default App;
