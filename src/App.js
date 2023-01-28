
import Login from './components/Login'
import Main from './components/Main'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/main' element={<Main />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
