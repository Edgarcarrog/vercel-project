import "./App.css";
import clienteAxios from "../src/config/axios";

function App() {
  return (
    <div className="App">
      <h1>Vercel Project 1.1</h1>
      <button
        onClick={async () => {
          const response = await clienteAxios.get("/");
          console.log("Get");
          console.log(response);
        }}
      >
        Get
      </button>
      <button
        onClick={async () => {
          const response = await clienteAxios.post("/");
          console.log("Post");
          console.log(response);
        }}
      >
        Post
      </button>
      <button
        onClick={async () => {
          const response = await clienteAxios.post("/");
          console.log("Put");
          console.log(response);
        }}
      >
        Put
      </button>
      <button
        onClick={async () => {
          const response = await clienteAxios.post("/");
          console.log("Delete");
          console.log(response);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default App;
