import "./App.css";
import Navbar from "./component/Navbar.js";
import ListItems from "./component/ListItems.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="spacer" />
      <div>
        <div>
          <h3>New Launches</h3>
        </div>
        <ListItems />
      </div>
      <div className="spacer" />
      <div>
        <h3>Most Popular</h3>
      </div>
      <ListItems />
    </div>
  );
}

export default App;
