import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Login from './components/Login';
import Search from './components/Search';
import Favorites from './components/Favorites';
import Nav from './components/Nav';

function App() {
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    navigate('/search');
  };

  const handleGoToFavorites = () => {
    navigate('/favorites');
  };

  return (
    <div className='App'>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route
            path='/'
            element={<Login onSubmitSuccess={handleLoginSuccess} />}
          />
          <Route
            path='/search'
            element={<Search onGoToFavorites={handleGoToFavorites} />}
          />
          <Route path='/favorites' element={<Favorites />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
