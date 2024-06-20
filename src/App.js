import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Molecules/Login';
import Signup from './Molecules/Signup';
import Dashboard from './Molecules/Dashboard';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='' element={<Login/>} />
            <Route path='/signup' element={<Signup/>} />
            <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
