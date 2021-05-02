import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Suspense } from "react";

import registerController from "./controllers/RegisterControllers";
import leadPanelController from "./controllers/LeadPanelController";
import leadAddController from "./controllers/LeadAddController";

function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={registerController} />
            <Route exact path="/lead-panel" component={leadPanelController} />
            <Route exact path="/lead-add" component={leadAddController} />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
