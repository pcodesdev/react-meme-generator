
import 'bootstrap/dist/css/bootstrap.min.css';

import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar';
import Form from './components/Form';
// import Challenge from './components/challenges/Couner';
import Counter from './components/challenges/Counter';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Form/>
     <Counter/>
    </div>
  );
}

export default App;
