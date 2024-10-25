import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";

function App() {
  return (
    <>
      <Header />
      <div className="pt-[78px]">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />

          <Route path=":username" element={<Profile />} />
          <Route path=":username/post/:id" element={<Profile />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
