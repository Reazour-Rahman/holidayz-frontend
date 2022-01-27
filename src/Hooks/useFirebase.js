import axios from "axios";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializationAuthentication from "../Pages/Authentication/firebase/firebase.init";

initializationAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [admin, setAdmin] = useState(false);
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // console.log(user);
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, [auth]);

  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const createAccountWithGoogle = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //Signin with email pass
  const handleUserRegister = (
    email,
    password,
    displayName,
    nationalidnumber
  ) => {
    // console.log(email);
    return createUserWithEmailAndPassword(
      auth,
      email,
      password,
      displayName,
      nationalidnumber
    );
  };

  const loginWithEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateName = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {
        const newUser = { ...user, displayName: name }; // recommend
        setUser(newUser);
        
      })
      .catch((error) => {
        
      });
  };
  // checking admin
  useEffect(() => {
    const api = `http://localhost:5000/users/${user.email}`;
    axios.get(api).then((res) => {
      setAdmin(res.data.admin);
    });
  }, [user.email]);

  const logOut = () => {
    // console.log("logouttttt");
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return {
    user,
    admin,
    setUser,
    signInWithGoogle,
    createAccountWithGoogle,
    loginWithEmailAndPassword,
    isLoading,
    setIsLoading,
    logOut,
    updateName,
    handleUserRegister,
  };
};

export default useFirebase;
