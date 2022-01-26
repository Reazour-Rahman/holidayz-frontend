import axios from "axios";
import React, { useState } from "react";
// import { Alert, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate, Link } from "react-router-dom";
import Button from '@mui/material/Button';



import "./Register.css";
import useFirebase from "../../../Hooks/useFirebase";
// React toastify

const Register = () => {
  // React Toastify

  // React Toastify
  // Alert Bootstrap
  const [show, setShow] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const { setUser, handleUserRegister, updateName, setIsLoading } =useFirebase();
  // console.log(isLoading)
  const url = location.state?.from || "/";
  //hook form
  const {
    register,
    handleSubmit,
    reset,
    // watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    if (data.password === data.confirmpassword) {
      handleUserRegister(data.email, data.password)
        .then((result) => {
          setIsLoading(true);

          setUser(result.user);
          // save user to the database
          saveUserInTheDb(data);
          console.log("user saving er niche");
          navigate(url);
          updateName(data.displayName);
          setErrorMessage("");
          // window.location.reload(); //for stopping reload
        })
        .catch((error) => {
          //  window.location.reload();
          const errorMessage = error.message;
          console.log(errorMessage);
          setErrorMessage("Email already in use");
          setShow(true);
        });
    } else {
      setErrorMessage("password and confirm password did not matched ");
      setShow(true);

    }


    setUser(data);
    // console.log(data.email);
  };

  // save user in the database
  const saveUserInTheDb = (data) => {
    const user = { ...data };
    console.log(user, "from outside axios");
    const api = "https://fathomless-coast-82114.herokuapp.com/clientregister";
    // const api = "https://fathomless-coast-82114.herokuapp.com/clientregister";
    axios.post(api, user).then((res) => {
      console.log(res, "inside axios");
      if (res.data.insertedId) {
        // alert("data inserted successfully");
        // notify();
        reset();
      }
    });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)} className="border ">

        <Link to="/login" style={{ textDecoration: "none" }} ><Button variant="outlined" className=""> <h2>icon</h2> Back to Login</Button> <br /></Link>
        {/* <h2>Please Register Here</h2> */}
        {errorMessage ? (
          <div className="">
            {/* <Alert
              variant="danger"
              className="w-100"
              onClose={() => setShow(false)}
            >
              <p className="error">{errorMessage}</p>
            </Alert> */}
          </div>
        ) : (
          <></>
        )}
        {/* <Form.Label>Name</Form.Label> */}
        <label htmlFor="">Name</label>
        <input
          id="standard-basic"
          label="Enter your Name "
          type="text"
          placeholder="Enter your name"
          {...register("displayName", {
            required: true,
            minLength: 4,
            maxLength: 40,
          })}
          variant="standard"
        />
        {errors.displayName && errors.displayName.type === "required" && (
          <>
            <span className="error ">Name is required</span>
            <br />
          </>
        )}
        {errors.displayName && errors.displayName.type === "maxLength" && (
          <>
            <span className="error ">Max length exceeded</span>
            <br />
          </>
        )}
        {errors.displayName && errors.displayName.type === "minLength" && (
          <>
            <span className="error ">Name Should be more than 4 charecter</span>
            <br />
          </>
        )}

        {/* <Form.Label className="mt-3">Email Address</Form.Label> */}
        <label htmlFor="">Email Address</label>
        <input
          id="standard-basic"
          label="Enter Your Email"
          type="email"
          placeholder="Enter your Email"
          {...register("email", { required: true })}
          variant="standard"
        />
        {errors.email && (
          <>
            <span className="error">Email is required </span>
            <br />
          </>
        )}
        {/* Phone Number start  */}
        {/* <Form.Label>Mobile Number</Form.Label> */}
        <label htmlFor="">Mobile Number</label>
        <input
          type="number"
          placeholder="Please Enter Mobile Number"
          {...register("mobilenumber", {
            required: true,
            minLength: 11,
            maxLength: 14,
          })}
        />
        {errors.mobilenumber && errors.mobilenumber.type === "required" && (
          <>
            <span className="error">Mobile Number is required </span>
            <br />
          </>
        )}
        {errors.mobilenumber && errors.mobilenumber.type === "minLength" && (
          <>
            <span className="error">Mobile Number must be 11 digit</span>
            <br />
          </>
        )}
        {errors.mobilenumber && errors.mobilenumber.type === "maxLength" && (
          <>
            <span className="error">Mobile Number must be 11 digit</span>
            <br />
          </>
        )}

        {/* Phone Number end   */}
        {/* DatePicker  */}

        {/* <Form.Label>Password</Form.Label> */}
        <label htmlFor="">Password</label>
        <input
          {...register("password", { required: true, minLength: 6 })}
          id="standard-basic"
          placeholder="Please Enter Your Password"
          type="password"
        />
        {errors.password && errors.password.type === "required" && (
          <>
            <span className="error">Password is required </span>
            <br />
          </>
        )}
        {errors.password && errors.password.type === "minLength" && (
          <>
            <span className="error">
              Password should be more than 6 charecters
            </span>
            <br />
          </>
        )}
        {/* <Form.Label>Confirm Password</Form.Label> */}
        <label htmlFor="">Confirm Password</label>
        <input
          {...register("confirmpassword", { required: true })}
          id="standard-basic"
          placeholder="Confirm Your Password"
          type="password"
        />
        {errors.confirmpassword && (
          <>
            <span className="error">Confirm Password is required </span>
            <br />
          </>
        )}

        <input type="submit" value="Create Account " className="submit-btn" />
      </form>

      {/* <ToastContainer /> */}
    </div>
  );
};

export default Register;
