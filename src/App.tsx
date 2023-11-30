import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Search from './components/Search';
import Favorites from './components/Favorites';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='search' element={<Search />} />
        <Route path='favorites' element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
