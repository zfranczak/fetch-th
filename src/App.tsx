import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Search from './components/Search';
import Favorites from './components/Favorites';
import { GlobalProvider } from './context/GlobalState'; // Import GlobalProvider

function App() {
  return (
    <GlobalProvider>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='search' element={<Search />} />
        <Route path='favorites' element={<Favorites />} />
      </Routes>
    </GlobalProvider>
  );
}

export default App;
