import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Donate from "./pages/Donate";
import DoMore from "./pages/DoMore";

export default function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/donate">
            <Donate />
          </Route>
          <Route path="/do_more">
            <DoMore />
          </Route>
        </Switch>
    </Router>
  );
}
