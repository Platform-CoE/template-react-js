import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Users from './pages/Users';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* 상단 공통 영역 */}
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>React Template</h1>
        </header>

        {/* 라우팅 영역 */}
        <Routes>
          <Route path="/" element={<Navigate to="/users" replace />} />
          {/* 사용자 목록 */}
          <Route path="/users" element={<Users />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
