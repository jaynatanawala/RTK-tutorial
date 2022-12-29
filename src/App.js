import Tutorial from "./pages/tutorial/Tutorial";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListTutorials from "./pages/tutorial/ListTutorials";
import SignUp from "./pages/user/Sign-up";
import Login from "./pages/user/Login";

function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/add" element={<Tutorial />} />
          <Route path="/tutorials" element={<ListTutorials />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
