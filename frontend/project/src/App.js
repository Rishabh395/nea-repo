import './App.css';
import Register from './component/Register';
import Welcome from './component/Welcome'
import Contact from './component/Contact';
import Loginpage1 from './component/Loginpage1'
import {
  BrowserRouter  as Router, 
  Route , 
  Routes ,
  Link
} from 'react-router-dom';
import Login from './component/Login';
import Nav from './component/Nav';
import Home from './component/Home';


function App() {
  return (
    <div >
      <Nav/>
     <Routes>
      <Route path='/' element={<Home/>} > </Route>
      <Route path='/welcome' element={<Welcome/>} > </Route>
      <Route path='/login' element={<Login/>} > </Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path = '/loginpage1' element={<Loginpage1/>}> </Route>
     </Routes>
     {/* <Footer/> */}

  
    </div>
  );
}

export default App;
