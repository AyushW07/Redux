import "./App.css";
import { Provider } from "react-redux";
import store from "./Components/store";
import TodoList from "./Components/todoList";

function App() {
  return (
    <Provider store={store}>
      <TodoList/>
    </Provider>
  );
}

export default App;
