// import React, { Component } from "react";
// import ReactDOM from "react-dom";

// const App = () => {
//   return (
//     <div>
//       <p>React here!!!</p>
//     </div>
//   );
// };

// export default App;

// ReactDOM.render(<App />, document.getElementById("app"));
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import App from "./components/App";
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);