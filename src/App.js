import "./App.css";
import Navbar from "./component/Navbar.js";
import ListItems from "./component/ListItems.js";
import Search from "./component/Search";
import FooterPage from "./component/footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="spacer" />
      <div>
        <Search />
      </div>
      <div style={{borderRadius:"2px", background:"#f7f7f7", marginTop:"5px"}}>
      <div >
        <div>
          <h5>New Launches</h5>
        </div>
        <ListItems />
      </div>
      <div className="spacer" />
      <div>
        <h5>Most Popular</h5>
      </div>
      <ListItems />
      </div>
      <FooterPage/>

    </div>
  );
}

export default App;
