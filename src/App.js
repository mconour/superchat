import "./App.css";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectData } from "react-firebase-hooks/firestore";

firebase.initializeApp({
  
});

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  // knowing if a user is logged in or not
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header className="App-header"></header>
      <section>
      {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}


function SignIn() {
  return (
    <button onClick={signInWithGoogle}>Sign in with Google</button>
  )
}



export default App;
