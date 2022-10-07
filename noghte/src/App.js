import { Routes , Route } from 'react-router-dom';
import './App.css';

import Login from './Components/LoginRegister/Login/Login';
import Register from './Components/LoginRegister/Register/Register';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
