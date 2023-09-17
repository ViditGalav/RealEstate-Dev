import { Route, Routes } from "react-router-dom";
import Home from './container/Home';
import Login from './container/Login';
import Signup from './container/Signup';
import SetPassword from './components/SetPassword';
import './CSS/customformstyle.css';
import './CSS/scrollbar.css';


import { GoogleOAuthProvider } from '@react-oauth/google';


const clientID = process.env.REACT_APP_GOOGLE_CLIENT_ID;


function App() {
  return (
    <GoogleOAuthProvider clientId={clientID} >
      <Routes>
        <Route path='set-password/:JSONData' element={<SetPassword />} />
        <Route path="/*" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </GoogleOAuthProvider>
  );
}

export default App;
