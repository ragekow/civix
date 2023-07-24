import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import FileDropPage from './pages/FileDropPage';
import MessagingPage from './pages/MessagingPage';
import WebsiteSetupPage from './pages/WebsiteSetupPage';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/file-drop">
            <FileDropPage />
          </Route>
          <Route path="/messaging">
            <MessagingPage />
          </Route>
          <Route path="/website-setup">
            <WebsiteSetupPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
