import { Route, Switch } from "react-router-dom"
import Header from "./components/Header";
import Home from "./components/Home";
import Counter from "./components/Counter";
import Timer from "./components/Timer";
import NotFound from "./components/NotFound";

import "./App.css";

function App() {
  return (
    <div className="app-container">
      <div className="app-heading-container">
      <p className="app-heading">Time based Applications</p>
      </div>
      <Header />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/counter" component={Counter}/>
          <Route exact path="/timer" component={Timer}/> 
          <Route component={NotFound}/>       
        </Switch>
    </div>   
  );
}

export default App;
