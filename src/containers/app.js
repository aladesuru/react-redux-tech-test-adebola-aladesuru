import React from 'react';
import MessageList from '../components/ListAllUsersMessages';
import UserMessages from '../components/UserMessages';
import PageNotFound from '../components/PageNotFound';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <main className="container">
      <Switch>
        <Route exact path="/" component={MessageList} />
        <Route path="/userId/:userId" component={UserMessages} />
        <Route component={PageNotFound} />
      </Switch>
    </main>
  </BrowserRouter>
);

export default App;
