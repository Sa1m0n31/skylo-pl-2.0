import React from 'react'
import {
    BrowserRouter as Router,
    Routes as Switch,
    Route
} from "react-router-dom";
import './static/style/style.css'
import './static/style/mobile.css'
import Homepage from "./pages/Homepage";

function App() {
  return <Router>
          <Switch>
              <Route path="/" element={<Homepage />} />
          </Switch>
      </Router>
}

export default App;
