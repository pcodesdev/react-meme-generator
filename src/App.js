
import 'bootstrap/dist/css/bootstrap.min.css';

import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar';
import Form from './components/Form';
import Challenge from './components/challenges/challenges';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Form/>
     <Challenge/>
    </div>
  );
}

export default App;
