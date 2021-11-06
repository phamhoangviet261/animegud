import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/login/login";
function App() {
  return (
    <div className="App">
      <Router>
    <Routes>
      <Route exact path="/" component={Login} />
    </Routes>
  </Router>
    </div>
  );
}

export default App;
