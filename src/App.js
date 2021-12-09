//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Primary from './myComponent/Primary';
import TodoAdd from './myComponent/TodoAdd';
import TodoList from './myComponent/TodoList';
function App() {
  return (
    <Router>
          
    <div>
        <Link to ='/'></Link>
    </div>
    <div >
        <Link to ='/todoadd'></Link>
    </div>
    <div >
        <Link to ='/todolist'></Link>
    </div>
    <Switch>
        <Route exact path="/">
           <Primary />
        </Route>  
        <Route exact path='/todoadd'>
            <TodoAdd/>
        </Route>     
        <Route exact path='/todolist'>
            <TodoList/>
        </Route>            
    </Switch> 
</Router>
  );
}

export default App;
