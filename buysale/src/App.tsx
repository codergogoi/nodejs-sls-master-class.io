import { Provider } from "react-redux";
import { store } from "./state/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RouteManager } from "./pages/RouteManager";

function App() {
  return (
    <div
      style={{
        flex: 1,
        height: "100%",
      }}
    >
      <Provider store={store}>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        {/* <AppAlertBox />
      <ErrorHandler />
      */}
        <RouteManager />
      </Provider>
    </div>
  );
}

export default App;
