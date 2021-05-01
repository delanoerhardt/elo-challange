import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Suspense } from "react";

import registerPage from "./routes/RegisterPage";
import leadPanelPage from "./routes/LeadPanelPage";
import leadAddPage from "./routes/LeadAddPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/register" component={registerPage} />
            <Route exact path="/lead-panel" component={leadPanelPage} />
            <Route exact path="/lead-add" component={leadAddPage} />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
