import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import { useState } from "react";

function App() {
  const [light, setLight] = useState(true);

  return (
    <Router>
      <div className={light ? "App" : ""}>
        <div className="container app_container">
          <div className="row">
            <div className="col-lg-3">
              <Sidebar light={light} setLight={setLight} />
            </div>
            <div className="col-lg-9">
              <div
                className={
                  light ? "app_main_content_light" : "app_main_content"
                }
              >
                <Navbar light={light} />
                <Switch>
                  <Route exact="true" path="/">
                    <About light={light} setLight={setLight} />
                  </Route>
                  <Route path="/resume">
                    <Resume light={light} />
                  </Route>
                  <Route path="/projects">
                    <Projects light={light} />
                  </Route>
                  <Route>
                    <Redirect to="/" />
                  </Route>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
