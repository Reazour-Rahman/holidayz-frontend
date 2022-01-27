import Header from "./Pages/Shared/Header/Header";
import { Route, Routes } from "react-router-dom";
import Footer from "./Pages/Shared/Footer/Footer";
import Home from "./Pages/Home/Home";
import Register from "./Pages/Authentication/SignUp/Register";
import Login from "./Pages/Authentication/SignIn/Login";
import AuthProvider from "./Context/AuthProvider";
import Details from "./Pages/Home/Blogs/Details/Details";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="blog/:blogId"
            element={
              <PrivateRoute>
                <Details />
              </PrivateRoute>
            }
          />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Routes>
        <Footer></Footer>
      </AuthProvider>
    </div>
  );
}

export default App;
