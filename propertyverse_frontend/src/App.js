import { Route, Routes } from "react-router-dom";
import Home from './container/Home';
import Login from './container/Login';
import Signup from './container/Signup';


function App() {
  return (
    <Routes>
      <Route path="/*" element={<Home />} />
      <Route path="/login" element={<Login />}/>
      <Route path="/signup" element={<Signup />}/>
    </Routes>
  );
}

export default App;
