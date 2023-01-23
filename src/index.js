// import React from 'react';
// import { createRoot } from 'react-dom/client';
import React from "react";
import { render } from "react-dom";
import App from './App';
import store from "./react/store";
import {Provider} from 'react-redux';

// const root = document.getElementById('root');
// const rootInstance = createRoot(root);

// rootInstance.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App/>
//     </Provider>
//   </React.StrictMode>
// );

const root = document.getElementById("root");
render(<React.StrictMode>
  <Provider store={store}>
    <App/>
  </Provider>
</React.StrictMode>, root);