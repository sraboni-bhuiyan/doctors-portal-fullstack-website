import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Shared/Navbar/Navbar';
import {Routes, Route, Link} from "react-router-dom"
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import Appointment from './Pages/Appointment/Appointment';
import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointments from './Pages/Dashboard/MyAppointments';
import MyReview from './Pages/Dashboard/MyReview';
import MyHistory from './Pages/Dashboard/MyHistory';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='about' element={<About/>}></Route>
        <Route path='appointment' element={<RequireAuth>
          <Appointment></Appointment>
        </RequireAuth>}></Route>
        <Route path='dashboard' element={<RequireAuth>
          <Dashboard></Dashboard>
        </RequireAuth>}>
          <Route index element={<MyAppointments></MyAppointments>}></Route>
          <Route path='review' element={<MyReview></MyReview>}></Route>
          <Route path='history' element={<MyHistory></MyHistory>}></Route>
        </Route>
        <Route path='login' element={<Login/>}></Route>
        <Route path='signup' element={<SignUp/>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
