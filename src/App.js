import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CategoryIndex from "./components/Category/CategoryIndex";
import CategoryCreate from "./components/Category/CategoryCreate";
import CategoryUpdate from "./components/Category/CreateUpdate";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={CategoryIndex} />
        <Route path="/Create" component={CategoryCreate} />
        <Route path="/Update" component={CategoryUpdate} />
      </Router>
    </div>
  );
}

export default App;
