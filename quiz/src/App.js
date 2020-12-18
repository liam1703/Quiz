import './App.css';
import './SignUp/SignUp.js';
import SignUp from './SignUp/SignUp.js';
import NavBar from './NavBar/NavBar.js';
import Clock from './Clock/Clock.js';

function App() {



  return (
    <div className="App">
        <NavBar/>
        <SignUp name=""/>
        {/* <SignUp name="" /> */}
        {/* <Clock/> */}
    </div>
  );
}

export default App;
