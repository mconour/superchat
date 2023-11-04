import React from 'react';
import './App.css';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


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



function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>


      </header>

      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>

    </div>
  );
}



export default App;
