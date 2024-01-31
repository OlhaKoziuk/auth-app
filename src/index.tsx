import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {HashRouter as Router, Routes, Route } from 'react-router-dom';
import { MainPage } from './components/MainPage';
import { LoginPage } from './components/LoginPage';
import { WelcomePage } from './components/WelcomePage';
import { ProfilePage } from './components/ProfilePage';
import { Provider } from 'react-redux';
import { store } from './app/store';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<MainPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="welcome" element={<WelcomePage />} />
            <Route path="profile" element={<ProfilePage />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);

