import "./App.css";
import Navbar from "./component/navbar/Navbar.js";
import FooterPage from "./component/footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ListItemDetails from "./component/item/ListItemDetails";
import Home from "./component/home";
import CategoryDetails from "./component/category/categorydetails";
import {AboutUs, ContactUs, DataUsageProtection, LenderProtection, TermsAndConditions} from "./component/footer/footerlinkcomponent";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />    
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/item/:id" component={ListItemDetails}/>
          <Route path="/categories" component={CategoryDetails}/>
          <Route path="/datausage" component={DataUsageProtection}/>
          <Route path="/lenderprotection" component={LenderProtection}/>
          <Route path="/aboutus" component={AboutUs}/>
          <Route path="/contactus" component={ContactUs}/>
          <Route path="/termsandconditions" component={TermsAndConditions}/>

        </Switch>
        <FooterPage />
      </div>
      
    </Router>
  );
}

export default App;
