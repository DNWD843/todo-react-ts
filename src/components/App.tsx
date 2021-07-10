import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { About } from './About';
import { Header } from './Header';
import { MainPage } from './MainPage';


const App: React.FC = () => (
  <>
    <Header />
    <div className="container">
      <Switch>
        <Route path="/" exact component={ MainPage } />
        <Route path="/about" component={About} />
      </Switch>
      
    </div>
  </>
);


export default App;
