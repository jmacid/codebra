import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import './App.css';

import Home from './Pages/Home';
import SnakePage from './Pages/SnakePage';

function App() {
  return (
    <Router>
      
      <Route exact path="/" component={Home}/>
      
      <Route exact path="/snake" component={SnakePage}/>
      
    </Router>
  );
}

export default App;
