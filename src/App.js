import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { React, useEffect } from 'react';
import Header from './components/header';
import Rockets from './pages/rockets';
import Missions from './pages/missions';
import Profile from './pages/profile';
import { fetchRockets, reserveRocket } from './redux/Rockets/rockets';
import { fetchMissions } from './redux/missions/missions';
import './App.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets());
    dispatch(fetchMissions());
  }, []);

  const rockets = useSelector((state) => state.rockets);
  const reserveRockets = (id) => {
    dispatch(reserveRocket(id));
  };

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Rockets rockets={rockets} reserveRocketsProps={reserveRockets} />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
