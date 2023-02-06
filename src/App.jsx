import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Pages/Homes/Home';

import {Route, Routes} from 'react-router-dom'
import Auth from './Pages/Auth/Auth';
import Enginer from './Pages/Enginners/Enginer';
import Dashboard from './Pages/Dashboard/Dashboard';
import Dmain from './Eng-Components/D-Main/D-Pages/Home/Dmain';
import Profile from './Eng-Components/D-Main/D-Pages/Profile/Profile';
import ProfileSetting from './Eng-Components/D-Main/D-Pages/Profile/Profile-component/ProfileSetting';
import ProfileLayout from './Eng-Components/D-Main/D-Pages/Profile/ProfileLayout';

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Authentication' element={<Auth />}/>
        <Route path='/enginner' element={<Enginer />} />

        <Route path='/dashboard' element={<Dashboard />} >
          <Route index element={<Dmain />} />
          
          <Route path='profile' element={<ProfileLayout />}>
          <Route index element={<Profile />} />
          <Route path='profile-setting' element={<ProfileSetting />} />
          </Route>

        </Route>
      </Routes>
      

    </div>
  )
}

export default App
