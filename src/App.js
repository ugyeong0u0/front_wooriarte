import "./App.css";
import Header from "./components/Header";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Header isLogin={true} />
      <Login />
    </div>
  );
}

export default App;
