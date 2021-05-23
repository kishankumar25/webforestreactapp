import logo from './logo.svg';
import './App.css';
import Login from './component/login';
import Location from "./component/Location";
import signup from "./component/signup";
import { BrowserRouter as Router, Route ,Switch} from 'react-router-dom'


function App() {
  return (
    <Router>
  <div className="App">
      
   
       <Switch>
       <Route exact path="/" component={Login} />
       <Route path = "/Location" component = {Location}/>
       <Route path = "/signup" component = {signup}/>

       


       </Switch>
    
         
    </div>
    </Router>
    
  )
}

export default App;
