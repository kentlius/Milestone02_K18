import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Switch>
      <Route path='/'>
      </Route>
    </Switch>
    </Router>
    </>
  );
}

export default App;
