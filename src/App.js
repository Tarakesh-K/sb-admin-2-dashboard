import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import "./vendor/fontawesome-free/css/all.min.css";
import Button from './Components/Button';
import "./css/sb-admin-2.min.css"
import Dashboard from './Components/Dashboard';
import Cards from './Components/Cards';
import Table from './Components/Table';
import Color from "./Components/Colors";
import Border from './Components/Border';
import Animation from './Components/Animation';
import Other from './Components/Other';
import FourNotFour from './Components/FourNotFour';
import Register from './Components/Register';
import ForgotPassword from './Components/ForgotPassword';
import Blank from './Components/Blank';
import Chart from './Components/Chart';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path="/button" element={<Button />} />
        <Route path="/card" element={<Cards />} />
        <Route path="/table" element={<Table />} />
        <Route path="/color" element={<Color />} />
        <Route path="/border" element={<Border />} />
        <Route path="/animation" element={<Animation />} />
        <Route path="/other" element={<Other />} />
        <Route path="/404" element={<FourNotFour />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/blank" element={<Blank />} />
        <Route path="/chart" element={<Chart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;