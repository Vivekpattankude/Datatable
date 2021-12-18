import './App.css';
import CommentList from './components/CommentList'
import Navbarcomp from './components/Navbarcopm';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

 

function App() {
  return (
    <div className="App">
     <Router>
       <Navbarcomp/>

      <Switch>
        <Route path="/home">
        <Home/>
        </Route>
        <Route path="/commentlist">
        <CommentList/>
        </Route>
      </Switch>
       
     </Router>
      
    </div>
  );
}

export default App;
