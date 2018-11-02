import * as React from 'react';
import HeaderComponent from './components/Header';
import './index.scss';

class View extends React.Component{
  public render(){
    return (
      <div>
        <HeaderComponent />
      </div>
    )
  }
}

export default View