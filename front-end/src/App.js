import logo from './logo.svg';
import './App.css';
//import Signup from './components/signup';
import SignUp from './components/SignUp';
import Login from './components/Login';
import {selectUser} from './features/userSlice'
import { useSelector } from 'react-redux';
import Nav from './components/Nav';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Logout from './components/Logout';
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

      {/* {user ? <Logout/> : <Login/>} */}

      <SignUp />
    </div>
    
  );
}

export default App;