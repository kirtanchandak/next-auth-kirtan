import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import styles from "../styles/Home.module.css";

function Login() {
  const { data: session } = useSession();
  console.log(session);
  if (session) {
    return (
      <div className={styles.main}>
        <p className="text-2xl">Welcome, {session.user.email}</p>
        <img src={session.user.image} alt="" srcset="" />
        <button
          onClick={() => signOut()}
          className="flex items-center space-x-2 bg-black p-3 rounded-lg drop-shadow-2xl mt-3 "
        >
          <span className="text-white">Sign Out!</span>
        </button>
      </div>
    );
  } else {
    return (
      <div className={styles.main}>
        <p className="text-2xl">You are not logged in!</p>
        <button
          onClick={() => signIn()}
          className="flex items-center space-x-2 bg-black p-3 rounded-lg drop-shadow-2xl mt-3"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png"
            className="w-14"
          />
          <span className="text-white font-sans text-xl font-semibold">
            Login with Google
          </span>
        </button>
      </div>
    );
  }
}

export default Login;
