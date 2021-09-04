import "./App.css";
import store from "./lib/redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App"></div>
    </Provider>
  );
}

export default App;
