import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import "./vendor/fontawesome-free/css/all.min.css";
import "./css/sb-admin-2.min.css"
import Dashboard from './Components/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;