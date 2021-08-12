import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import Navbar from './Components/Navbar/Navbar';
import Chat from './Pages/Chat/Chat';

function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Switch>
      <Route path='/chat'>
        <Chat/>
      </Route>
    </Switch>
    </Router>
    </>
  );
}

export default App;
