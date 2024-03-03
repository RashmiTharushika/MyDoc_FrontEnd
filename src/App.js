import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import SigninFrm from './components/form/SignInFrm';
import Login from './pages/Login/Login';
import Main from './components/main_menu/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import Consult from './components/consult/Consult';
import Doctor from './components/doctor/Doctor'

function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //   </Routes>
    // </Router>

<>
    <Login/>

    {/* <Main/> */}

    {/* <Consult/> */}

{/* <Doctor/> */}
</>

  );
}

export default App;
