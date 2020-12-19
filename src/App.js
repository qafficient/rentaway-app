import "./App.css";
import Navbar from "./component/navbar/Navbar.js";
import Search from "./component/search/Search";
import FooterPage from "./component/footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ListItemDetails from "./component/item/ListItemDetails";
import Home from "./component/home";
import CategoryDetails from "./component/category/categorydetails";
import CategoryPage from "./component/category/categorypage";

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
          <Route path="/category" exact component={CategoryPage}/>
          <Route path="/category/:name" component={CategoryDetails}/>

        </Switch>
        <FooterPage />
      </div>
      
    </Router>
  );
}

export default App;
