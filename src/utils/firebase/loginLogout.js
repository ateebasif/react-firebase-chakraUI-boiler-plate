import _get from "lodash/get";
import firebase from "./firebase";

export const signIn = async (email, password) => {
  if (!email && !password) return null;

  const res = await firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      console.log("user signed in");
      return true;
    })
    .catch((err) => {
      console.log("error signing in", err);
      return _get(err, "message", "");
    });

  return res;
};

export const signOut = async () => {
  await firebase
    .auth()
    .signOut()
    .then(() => {
      console.log("user signed out");
    })
    .catch((err) => {
      console.log("err user signOut ", err);
    });
};
