import "./App.css";
import "./index.css";
function App() {
  return (
    <div className="app">
      <div className="title bg-regal-blue text-white flex justify-center flex-col items-center text-3xl p-4">
        <h1>Pokemon React App</h1>
        <input
          type="text"
          className="mt-5 w-[200px] h-[40px] text-sm px-4 py-2 bg-input-field rounded-3xl border-solid border-black border-2 outline-none"
        />
      </div>
    </div>
  );
}

export default App;
