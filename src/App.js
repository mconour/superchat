import React from 'react';
import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyDkzi4EeO5RJLzwPrEFH9ZPptPPAD37GmQ",
  authDomain: "superchat-9cac7.firebaseapp.com",
  databaseURL: "https://superchat-9cac7-default-rtdb.firebaseio.com",
  projectId: "superchat-9cac7",
  storageBucket: "superchat-9cac7.appspot.com",
  messagingSenderId: "587638261291",
  appId: "1:587638261291:web:824443a38c49b84d8ccc6e",
  measurementId: "G-BYPSFEQKH6"
})

const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();


function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
    <header>
      <h1>⚛️🔥💬</h1>
      <SignOut />
    </header>

    <section>
      {user ? <ChatRoom /> : <SignIn />}
    </section>

  </div>
  );
}

function SignIn() {

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
      <p>Do not violate the community guidelines or you will be banned for life!</p>
    </>
  )

}

export default App;
