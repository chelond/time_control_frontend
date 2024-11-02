import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './pages/LoginForm';
import RegistrationForm from './pages/RegistrationForm';
import HomePage from './pages/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegistrationForm />} />
      </Routes>
    </Router>
  );
};

export default App;
