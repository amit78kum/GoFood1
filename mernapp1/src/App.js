
import './App.css';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'  //npm i bootstrap-dark-5 boostrap
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './screens/Home';
import Login from './screens/Login';
import Signup from './screens/Signup';

function App() {
  return (
   <Router>
   <div>
    <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/login" element={<Login />} />
    <Route exact path="/creatuser" element={<Signup />} />
    </Routes>
   </div>
   </Router>
  );
}

export default App;
