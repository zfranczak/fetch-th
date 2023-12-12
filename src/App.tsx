import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from './components/Login';
import Search from './components/Search';
import Favorites from './components/Favorites';

function App() {
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    navigate('/search'); // Navigate to the search page on successful login
  };

  return (
    <div className='App'>
      <Routes>
        <Route
          path='/'
          element={<Login onSubmitSuccess={handleLoginSuccess} />}
        />
        <Route path='/search' element={<Search />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
