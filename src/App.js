import "./App.css";
import Navbar from "./component/Navbar.js";
import Search from "./component/Search";
import FooterPage from "./component/footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ListItemDetails from "./component/ListItemDetails";
import Home from "./component/home";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="spacer" />
        <div>
          <Search />
        </div>
        
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/item/:id" component={ListItemDetails}/>
        </Switch>
        <FooterPage />
      </div>
      
    </Router>
  );
}

export default App;
