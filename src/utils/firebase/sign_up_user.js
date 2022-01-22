import _get from "lodash/get";
import firebase from "./firebase";

const firestore = firebase.firestore();

const signUpuser = async (email, password) => {
  if (!email && !password) return null;

  const response = await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      const currentUser = firebase.auth().currentUser;
      createUserProfile(currentUser);

      return true;
    })
    .catch((err) => {
      return _get(err, "message", "");
    });

  return response;
};

const createUserProfile = async (user) => {
  const userProfileRef = firestore.collection("userProfile");
  const { uid, email } = user;

  await userProfileRef
    .doc(uid)
    .set({
      email,
      uid,
    })
    .then(() => {
      console.log("user profile created");
    })
    .catch((err) => {
      console.log("error creating user profile", err);
    });
};

export default signUpuser;
