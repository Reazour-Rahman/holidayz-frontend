import Header from "./Pages/Shared/Header/Header";
import { Route, Routes } from "react-router-dom";
import Footer from "./Pages/Shared/Footer/Footer";
import Home from "./Pages/Home/Home";
import Register from "./Pages/Authentication/SignUp/Register";
import Login from "./Pages/Authentication/SignIn/Login";
import AuthProvider from "./Context/AuthProvider";
import Details from "./Pages/Home/Blogs/Details/Details";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Packages from "./Pages/Dashboard/Packages/Packages";
import AdminRoute from "./Pages/PrivateRoute/AdminRoute";
import Blogs from "./Pages/Dashboard/Blogs/Blogs";
import PostRequests from "./Pages/Dashboard/PostRequest/PostRequests";
import Users from "./Pages/Dashboard/Users/Users";
import AddPackage from "./Pages/Dashboard/Packages/AddPackage";


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Header></Header>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            path="blog/:blogId"
            element={
              <PrivateRoute>
                <Details />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <AdminRoute>
                <Dashboard />
              </AdminRoute>
            }
          />

          <Route
            path="/dashboard"
            element={
              <AdminRoute>
                <Dashboard />
              </AdminRoute>
            }
          >
            <Route
              exact
              path="/dashboard"
              element={<Packages/>}
            ></Route>

            <Route
              exact
              path="/dashboard/addBlog"
              element={<AddPackage/>}
            ></Route>
    
            <Route
              path={`/dashboard/postRequest`}
              element={<PostRequests/>}
            ></Route>
            <Route
              path={`/dashboard/users`}
              element={<Users/>}
            ></Route>
          </Route>

          {/* <Route path="/dashboard/packages" element={<Packages></Packages>} /> */}
          {/* <Route path="/dashboard/users" element={<User/>} /> */}

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer></Footer>
      </AuthProvider>
    </div>
  );
}

export default App;
