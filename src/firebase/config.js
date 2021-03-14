import firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig ={
    apiKey: 'AIzaSyCW5kbkXkn2gC4Io0NxiGyMDViNFA-vsuc',
    authDomain: 'todo-native-frb.firebaseapp.com',
    databaseURL: 'https://your-database-name.firebaseio.com',
    projectId: 'todo-native-frb',
    storageBucket: 'todo-native-frb.appspot.com',
    messagingSenderId: '169486913702',
    appId: '1:169486913702:android:ec438f5000b977cac06467'
  };

  if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
  }

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get(); //retreieved the info
  
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({ //sent information to the db
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };
  
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  const providers = new firebase.auth.FacebookAuthProvider();


  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export const signInWithFacebook = () => auth.signInWithPopup(providers);
  


  export {firebase};