import logo from './logo.svg';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginScreen from './components/Login Screen/LoginScreen';
import AboutUsNew from './components/AboutUsNew/Introducing/AboutUsNew';
import CreateAnAccount from './components/CreateAnAccountOne/CreateAnAccount';
import SignUpTwo from './components/SignUpTwo/SignUpTwo';
import SignUpThree from './components/SignUpThree/SignUpThree';
import RealContactUs from './components/RealContactUs/RealContactUs';
import FAQs from './components/FAQs/FAQs';
import DashboardOne from './components/DashboardOne/DashboardOne';
function App() {
  return (
   <div>
   <div className='display'>
   <Router >
      <Routes>
        <Route path='/' element={<LandingPage />}/>
        <Route path='/LogIn' element={<LoginScreen />} />
        <Route path='/aboutus' element={<AboutUsNew />} />
        <Route path='/SignUp' element={<CreateAnAccount />} />
        <Route path='/signuptwo' element={<SignUpTwo />} />
        <Route path='/signupthree' element={<SignUpThree />} />
        <Route path='/contactus' element={<RealContactUs />} />
        <Route path='/faqs' element= {<FAQs/>} />
        <Route path='/dashboardone' element= {<DashboardOne/>} />
      </Routes>
    </Router>
   </div>
    <div className='hide' >
    This website is not available for you use a larger screen i.e. Laptop, Desktop e.t.c.
    </div>
   </div>
  
  );
}

export default App;
