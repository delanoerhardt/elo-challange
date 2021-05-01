import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Suspense } from "react";

import registerView from "./routes/RegisterView";
import leadPanelView from "./routes/LeadPanelView";
import leadAddView from "./routes/LeadAddView";

function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/register" component={registerView} />
            <Route exact path="/lead-panel" component={leadPanelView} />
            <Route exact path="/lead-add" component={leadAddView} />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
