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

function SignIn() {

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
      <p>Do not violate the community guidelines or you will be banned for life!</p>
    </>
  )

}

function SignOut() {
  return auth.currentUser && (
    <button onClick={() => auth.signOut()}>Sign Out</button>
  )
}


function ChatRoom() {

  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, { idField: 'id' });




  return (
    <>
      <div>
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
      </div>


    </>)
}


function ChatMessage(props) {
  const { text, uid } = props.message;



  return (<>
    <p>
      {text}
    </p>
  </>)
}

export default App;
