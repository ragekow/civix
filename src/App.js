import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/file-drop" element={<FileDropPage />} />
          <Route path="/messaging" element={<MessagingPage />} />
          <Route path="/website-setup" element={<WebsiteSetupPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
