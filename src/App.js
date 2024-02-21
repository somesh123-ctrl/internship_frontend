import logo from "./logo.svg";
import "./App.css";
import Signup from "./pages/Signup";
import { Route, Routes } from "react-router-dom";
import Form1 from "./pages/Form1";
import Form2 from "./pages/Form2";
import Global from "./pages/Global";
import Main from "./pages/Main";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/form1" element={<Form1 />} />
        <Route path="/form2" element={<Form2 />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
