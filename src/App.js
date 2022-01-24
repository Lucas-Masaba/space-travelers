import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Rockets from './pages/rockets';
import Missions from './pages/missions';
import Profile from './pages/profile';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Rockets />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
