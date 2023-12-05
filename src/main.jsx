import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
// const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <GoogleOAuthProvider clientId="116088983569-bnlgslv0bjcu2q6lq66sesj4grmr8i10.apps.googleusercontent.com">
  // <Provider store={store}>
  //   <PersistGate persistor={persistor}>
  //     <ConfigProvider
  //       theme={{
  //         token: {
  //           colorPrimary: "BLUE",
  //         },
  //       }}
  //     >
  //       <QueryClientProvider client={queryClient}>
  <Router>
    <App />
  </Router>
  //       </QueryClientProvider>
  //     </ConfigProvider>
  //   </PersistGate>
  // </Provider>
  // </GoogleOAuthProvider>
);
