import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";

import Routers from "./components/Routers";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header isLogin={false} />
        <Routers />
      </BrowserRouter>
    </div>
  );
}

export default App;
