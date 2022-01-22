import firebase from "./firebase";

const firestore = firebase.firestore();

const createSnapshot = async (code, user, collectionName) => {
  if (!code && !user && !collectionName) return null;

  const snapShotRef = firestore.collection(collectionName);
  const { uid } = user;
  await snapShotRef
    .doc()
    .set({
      code: code,
      createdBy: uid,
    })
    .then(() => console.log("snapshot created"))
    .catch((err) => console.log("error in creating snapshot", err));
};

export default createSnapshot;
