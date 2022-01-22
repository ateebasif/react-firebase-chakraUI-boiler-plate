import firebase from "./firebase";

const getSnapshots = async () => {
  const firestore = firebase.firestore();
  const snapShotRef = firestore.collection("snapShots");
  const snapshot = await snapShotRef.get();

  const snapshotData = [];

  snapshot.forEach((doc) => {
    const { code } = doc.data();

    snapshotData.push({ id: doc.id, code });
  });

  return snapshotData;
};

export default getSnapshots;
