import { Switch, Route, Redirect } from "react-router-dom";

import { Home, Auth } from "./pages";

function App() {
  const isAuth = true;
  if (isAuth) {
    return (
      <div className="wrapper">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/dialogs/:id">
            <Home />
          </Route>
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }

  return (
    <div className="wrapper">
      <Route path={['/', '/login', '/register']} exact>
        < Auth />
      </Route>
      <Redirect to="/login" />
    </div>
  );
}

export default App;
