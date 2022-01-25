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
  // rockets
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, []);

  const reserveRockets = (id) => {
    dispatch(reserveRocket(id));
  };

  // missions
  const missions = useSelector((state) => state.missions);
  useEffect(() => {
    dispatch(fetchMissions());
  }, []);
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Rockets rockets={rockets} reserveRocketsProps={reserveRockets} />} />
          <Route path="/missions" element={<Missions missions={missions} />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
