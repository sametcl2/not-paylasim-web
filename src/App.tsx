import { Provider } from "react-redux";
import { BrowserRouter } from "react-router";
import { AppInitializer } from "./components/AppInitiliazer";
import { store } from "./store/setup/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppInitializer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
