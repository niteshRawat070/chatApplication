import React,{useState} from "react";
import "./App.css";
import { Route,Switch,useLocation } from "react-router-dom";
import WelcomeScreen from "./screens/WelcomeScreen";
import ChatScreen from './screens/ChatScreen';
import { useDispatch, useSelector} from 'react-redux';
import Home from "./screens/Home";
import Help from "./screens/Help";
import { AnimatePresence } from 'framer-motion';




export default function App() {
  const location=useLocation();
  const [userName,setUserName]=useState('');
  const userNameRedux=useSelector(state=>state.userNameRedux);
  const dispatch=useDispatch();

  return (
    <AnimatePresence exitBeforeEnter>
    <Switch location={location} key={location.key}>
      <Route path='/welcome'>
        <WelcomeScreen userName={userName} userNameRedux={userNameRedux} dispatch={dispatch} setUserName={setUserName} />
      </Route>
      <Route path='/chat'>
        <ChatScreen userNameRedux={userNameRedux} dispatch={dispatch} />
      </Route>
      <Route path='/help'>
        <Help />
      </Route>
      <Route path='/'>
        <Home />
      </Route>
    </Switch>
    </AnimatePresence>
  );
}


// import React, { useState } from "react";
// import "./App.css";
// import { Route,Switch,useLocation } from "react-router-dom";
// // import Routes from "./routes/Routes";
// // import history from "./services/history";
// import WelcomeScreen from "./screens/WelcomeScreen";
// import ChatScreen from './screens/ChatScreen';

// export default function App() {
//   const location=useLocation();
//   const [userName,setUserName]=useState('');

//   return (
//     <Switch location={location} key={location.key}>
//       <Route path='/home'>
//         <WelcomeScreen userName={userName} setUserName={setUserName} />
//       </Route>
//       <Route path='/chat'>
//         <ChatScreen userName={userName} />
//       </Route>

//     </Switch>
//     // <Router history={history}>
//     //   <Routes />
//     // </Router>
//   );
// }
