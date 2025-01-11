import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Result from './components/Result';
import Stat from './components/Stat';
function App() {
  return (
    <div className="App">
       <div>
         <Navbar></Navbar>
       </div>
       <div className='flex '>
        <Result></Result>
        <Stat></Stat>
       </div>
    </div>
  );
}

export default App;
