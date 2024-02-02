import logo from "./logo.svg";
import "./App.css";
import AllUser from "./components/AllUser";
import CheckConnection from "./components/CheckConnection";

function App() {
  return (
    <div className="App">
      <AllUser />
      <CheckConnection />
    </div>
  );
}

export default App;
