import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import Packages from "./Packages/Packages";
import Users from "./Users/Users";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Dashboard() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>

      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Mini variant drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List className="" style={{height:"100vh"}}>
          <Link className="text-decoration-none" to="/dashboard">
            <ListItem button>
              <ListItemIcon className="ms-2 fs-5"><i class="fas fa-blog"></i></ListItemIcon>
              <ListItemText primary={"Blogs"} />
            </ListItem>
          </Link>

          <Link className="text-decoration-none" to="/dashboard/addBlog">
            <ListItem button>
              <ListItemIcon className="ms-2 fs-5"><i class="fas fa-folder-plus"></i></ListItemIcon>
              <ListItemText primary={"Add Blog"} />
            </ListItem>
          </Link>

          <Link className="text-decoration-none" to="/dashboard/users">
            <ListItem button>
              <ListItemIcon className="ms-2 fs-5"><i class="fas fa-users"></i></ListItemIcon>
              <ListItemText primary={"Users"} />
            </ListItem>
          </Link>

          <Link className="text-decoration-none" to="/dashboard/postRequest">
            <ListItem button>
              <ListItemIcon className="ms-2 fs-5"><i class="fas fa-spinner"></i></ListItemIcon>
              <ListItemText primary={"Post Request"} />
            </ListItem>
          </Link>

          <span className="text-decoration-none">
            <ListItem button>
              <ListItemIcon className="ms-2 fs-5"><i class="far fa-comment"></i></ListItemIcon>
              <ListItemText primary={"Messages"} />
            </ListItem>
          </span>

          <ListItem button>
            <ListItemIcon className="ms-2 fs-5"><i class="far fa-comment-alt"></i></ListItemIcon>
            <ListItemText primary={"Reviews"} />
          </ListItem>
        </List>
        <Divider />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />

        <Outlet>
        <Routes>
        <Route path="/dashboard/packages" element={<Packages></Packages>} />
        <Route path="/dashboard/users" element={<Users/>} />
        </Routes>
        </Outlet>

      </Box>
    </Box>
  );
}

// import React from "react";
// import { Col, Container, Row } from "react-bootstrap";
// import { Link, Outlet } from "react-router-dom";
// import useFirebase from "../../Hooks/useFirebase";

// import "./Dashboard.css";
// const Dashboard = () => {
//   const { logOut, user } = useFirebase();
//   return (
//     <div>
//       <Container>
//         {/* style={{background : '#d1e8e2'}} */}
//         <Row>
//           <Col className="bg-danger py-5" lg={3} sm={12}>
//             <div className="heading mt-5 text-center">
//               <h1 className="my-2 text-white">DashBoard</h1>
//             </div>

//             <ul className="dashboard-navbar">
//               <h6 className=" my-3 fw-bold text-white border-1 ">
//                 {user.email ? (
//                   <img
//                     src={
//                       user?.photoURL
//                         ? user.photoURL
//                         : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfZrsHa4yTpOTalvfF-EnLhyxY59jKbMX8__sb2XJs5wW2fV_zDdEo0mJgGRTXlPbkR-Y&usqp=CAU"
//                     }
//                     className="rounded-circle me-3"
//                     height={50}
//                     width={50}
//                     alt=""
//                   />
//                 ) : (
//                   ""
//                 )}{" "}
//                 {user?.displayName}
//               </h6>
//               <button className="btn dashboard-btn mx-2 d-flex align-items-center text-white ">
//                 <i className="fas fa-home me-2 fs-4"></i>
//                 <Link className="text-white" to={`/`}>
//                   Home
//                 </Link>
//               </button>
//               <br />

//               <button className="btn dashboard-btn mx-2 d-flex align-items-center text-white ">
//                 <i className="far fa-plus-square me-2 fs-4"></i>
//                 <Link className="text-white" to={`/dashboard/postBlog`}>
//                   Add Post
//                 </Link>
//               </button>
//               <br />
//               <button className="btn dashboard-btn mx-2 d-flex align-items-center text-white ">
//                 <i className="fas fa-edit me-2 fs-4"></i>
//                 <Link className="text-white" to={`/dashboard/userBlogs`}>
//                   User Pending Blogs
//                 </Link>
//               </button>

//               <br />

//               <button className="btn dashboard-btn mx-2 d-flex align-items-center text-white ">
//                 <i className="fas fa-users-cog me-2 fs-4"></i>
//                 <Link className="text-white" to={`/dashboard/makeAdmin`}>
//                   Make Admin
//                 </Link>
//               </button>

//               <br />

//               <button className="btn dashboard-btn mx-2 d-flex align-items-center text-white ">
//                 <i className="fas fa-cogs me-2 fs-4"></i>
//                 <Link className="text-white" to={`/dashboard`}>
//                   Manage All Blogs
//                 </Link>
//               </button>
//               <br />
//               <button
//                 style={{ fontSize: "20px" }}
//                 onClick={logOut}
//                 className="btn dashboard-btn mx-2 d-flex align-items-center text-white "
//               >
//                 <i class="fas fa-sign-out-alt me-2 fs-4"></i>
//                 Log Out
//               </button>
//             </ul>
//           </Col>
//           <Col className="py-5" lg="9" sm="12">
//             <Outlet></Outlet>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default Dashboard;
