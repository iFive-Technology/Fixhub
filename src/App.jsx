import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Pages/Homes/Home';

import {Route, Routes} from 'react-router-dom'
import Auth from './Pages/Auth/Auth';
import Enginer from './Pages/Enginners/Enginer';
import Dashboard from './Pages/Dashboard/Dashboard';

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Authentication' element={<Auth />}/>
        <Route path='/enginner' element={<Enginer />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
      

    </div>
  )
}

export default App
