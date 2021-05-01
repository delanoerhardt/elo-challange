import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Suspense } from "react";

import registerPage from "./routes/RegisterPage";
import leadPanelPage from "./routes/LeadPanelPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/register" component={registerPage} />
            <Route exact path="/lead-panel" component={leadPanelPage} />
          </Switch>
        </Suspense>
      </Router>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
