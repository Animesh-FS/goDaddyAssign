import "./App.css";
import { Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { lazy, Suspense } from "react";
const RepoInfo = lazy(() => import("./pages/RepoInfo/index"));
function App() {
  return (
    <div className="App">
      <Suspense fallback="Loading...">
        <Switch>
          <Route
            path="/"
            exact
            render={(routeProps) => <Home {...routeProps} />}
          />
          <Route
            path="/repo"
            render={(routeProps) => <RepoInfo {...routeProps} />}
          ></Route>
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
