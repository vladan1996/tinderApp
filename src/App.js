import "./App.css";
import Header from "./components/Header";
import Chats from "./components/Chats";
import ChatScreen from "./components/ChatScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TinderCards from "./components/TinderCards";
import SwipeButtons from "./components/SwipeButtons";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/chat/:person">
            <Header backButton="/chat" />
            <ChatScreen />
          </Route>
          <Route path="/chat">
            <Header backButton="/" />
            <Chats />
          </Route>
          <Route path="/">
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
        {/* Central  Card Image */}
      </Router>
      {/* Buttons with menu */}

      {/* Chats screen */}
      {/* Individual chat screen */}
    </div>
  );
}

export default App;
