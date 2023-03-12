import logo from './logo.svg';
import './App.css';
//import Signup from './components/signup';
import SignUp from './components/signup';
import Login from './components/Login';
import PharmacistLogin from './components/pharmacistLogin'

import {selectUser} from './features/userSlice'
import { useSelector } from 'react-redux';
import Nav from './components/Nav';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Logout from './components/Logout';
import AdminHomePage from './components/AdminHomePage';
import PharmacyApproval from './components/PharmacyApproval';
import PharmacyDetails from './components/PharmacyDetails';
import PharmacyRegister from './components/PharmacyRegister';
import PharmacyHomePage from './components/PharmacyHomePage'
import OrderApproval from './components/OrderApproval';
import OrderDetails from './components/OrderDetails';
import Welcome from './components/Welcome';
import AddProducts from './components/AddProducts';
import ProductDetails from './components/ProductDetails';
//import {valid} from './components/Login'

function App() {
  const user = useSelector(selectUser)
  //console.warn(valid)
  // const check = valid
  // console.warn(check)
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div className='App'>
      {/* <BrowserRouter>
      <Login/>
      <Routes>
        <Route path="/" element={<h1>Home page component</h1>}></Route>
        <Route path="/add" element={<h1>add product component</h1>}></Route>
        <Route path="/profile" element={<h1>profile component</h1>}></Route>
        <Route path="/logout" element={<h1>logout page component</h1>}></Route>
      </Routes>
      <h1>Medicines Plus More</h1>
      </BrowserRouter> */}

        {/* {user ? <Logout/> : <Login/>}   */}
      
      {/* <AdminHomePage/> */}

      <BrowserRouter>
      <Routes>
        <Route exact path='/AdminHomePage' element={<AdminHomePage />} />
        <Route exact path='/Login' element={<Login />} />
        <Route exact path='/PharmacyApproval' element={<PharmacyApproval />} />
        <Route exact path='/PharmacyDetails' element={<PharmacyDetails />} />
        <Route exact path='/PharmacistLogin' element={<PharmacistLogin />} />
        <Route exact path='/PharmacyRegister' element={<PharmacyRegister />} />
        <Route exact path='/PharmacyHomePage' element={<PharmacyHomePage />} />
        <Route exact path='/OrderApproval' element={<OrderApproval />} />
        <Route exact path='/OrderDetails' element={<OrderDetails />} />
        <Route exact path='/' element={<Welcome />} />
        <Route exact path='/AddProducts' element={<AddProducts />} />
        <Route exact path='/ProductDetails' element={<ProductDetails />} />
        
      </Routes>
      </BrowserRouter>
      {/* <SignUp /> */}
    </div>
    
  );
}

export default App;