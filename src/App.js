import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from './components/header';
import Rockets from './pages/rockets';
import Missions from './pages/missions';
import Profile from './pages/profile';
import { fetchRockets } from './Rockets/rockets';
import './App.css';

function App() {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, []);
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Rockets rockets={rockets} />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
