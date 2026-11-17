"use client";
import { login } from "@/app/redux/userSlice";
import { auth } from "@/firebase";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [isClient, setIsClient] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const loginToApp = (e: any) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth?.user?.email,
            uid: userAuth?.user?.uid,
            displayName: userAuth?.user?.displayName,
            profileUrl: userAuth?.user?.photoURL,
          }),
        );
      })
      .catch((error) => {
        if (error.code === "auth/invalid-login-credentials") {
          alert("Sorry, we couldn't find your account. Please Register Now ");
        } else if (
          error.code === "auth/invalid-email" ||
          error.code === "auth/wrong-password"
        ) {
          alert("Invalid email or password. Please try again.");
        } else {
          alert(error.message);
        }
      });
  };
  const register = () => {
    if (!name) {
      return alert("please enter your full name");
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth?.user
          ?.updateProfile({
            displayName: name,
            photoURL: profilePic,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth?.user?.email,
                uid: userAuth?.user?.uid,
                displayName: name,
                photoUrl: profilePic,
              }),
            );
          });
      })
      .catch((error) => alert(error.message));
  };

  if (!isClient) {
    return null;
  }

  return (
    <div className="login">
      <div className="logoImg">
        <Image
          src="/images/ConnectHub-Community-Logo.png"
          height={120}
          width={200}
          alt="linkedIn logo"
        />
      </div>
      <form>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full name (required if registering)"
        />
        <input
          type="text"
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
          placeholder="Profile pic URL (optional)"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button onClick={loginToApp}>Login</button>
      </form>
      <p>
        Don’t have an account?
        <span className="login__register" onClick={register}>
          Register Now
        </span>
      </p>

      <p className="login__disclaimer">
        Independent educational project — not affiliated with LinkedIn.
      </p>
    </div>
  );
};

export default Login;
