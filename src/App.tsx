import React from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
// import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';
import { MainPage } from './pages/MainPage';
import { LoginPage } from './pages/LoginPage';
import { WelcomePage } from './pages/WelcomePage';
import { ProfilePage } from './pages/ProfilePage';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { ProtectedRoute } from './components/ProtectedRoute';
import { NotFoundPage } from './pages/NotFoundPage';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route element={<ProtectedRoute />}>
            <Route path="welcome" element={<WelcomePage />} />
            <Route path="profile" element={<ProfilePage />} />
          </Route>
          <Route path="login" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
