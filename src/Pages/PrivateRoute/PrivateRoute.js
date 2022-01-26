// import React from 'react';
// import { Redirect, Route } from 'react-router';
// import useAuth from '../../hooks/useAuth';

// const PrivateRoute = ({ children, ...rest }) => {
//     const {user} = useAuth();
//     console.log(user);
//     return (
//         <Route
//       {...rest}
//       render={({ location }) =>
//         user.displayName ? (
//           children
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/register",
//               state: { from: location }
//             }}
//           />
//         )
//       }
//     />
//     );
// };

// export default PrivateRoute;

// Bootstrap Spinner

// Bootstrap Spinner
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
// react spinner
import { useState } from "react";
import { css } from "@emotion/react";
import { HashLoader } from "react-spinners";
// react spinner

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  let location = useLocation();
  // react spinner
  let [spinner, setSpinner] = useState(true);
  let [color, setColor] = useState("#36D7B7");
  const override = css`
    display: block;
    align: center;
    margin: 125px auto;
    border-color: red;
  `;

  // react spinner

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        {" "}
        <HashLoader color={color} spinner={spinner} css={override} size={65} />
      </div>
    );
  }
  if (user.email) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} />;
};

export default PrivateRoute;
