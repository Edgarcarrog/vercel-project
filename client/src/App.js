import "./App.css";
import clienteAxios from "../src/config/axios";

function App() {
  return (
    <div className="App">
      <h1>Vercel Project 1.1</h1>
      <button onClick={console.log("get")}>Get</button>
      <button>Post</button>
      <button>Put</button>
      <button>Delete</button>
    </div>
  );
}

export default App;
