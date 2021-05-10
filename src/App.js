import React, { useState } from 'react';
import './App.css';
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import GoogleButton from 'react-google-button'

import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'

firebase.initializeApp({
  apiKey: "AIzaSyBWh_mdoSuwzsw7o_fnq8d0dgr2Q5qYctY",
  authDomain: "chat-app-42ee7.firebaseapp.com",
  projectId: "chat-app-42ee7",
  storageBucket: "chat-app-42ee7.appspot.com",
  messagingSenderId: "891274908278",
  appId: "1:891274908278:web:3eef64b0fcfc8d30b18557"
})

const auth = firebase.auth();
const firestore = firebase.firestore();



function App() {

  const Signin = () => {

    const googleSignIn = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
    }
    return (
      <div>
        <h3>FireChat-Messenger</h3>
        <button className='sign-in' onClick={googleSignIn}><GoogleButton /></button>
      </div>
    )
  }

  const Signout = () => {

    return auth.currentUser && (
      <button className='sign-out' onClick={() => auth.signOut()}>Signout</button>
    )
  }

  const ChatRoom = () => {
    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt').limit(30);
    const [messages] = useCollectionData(query, { idField: 'id' })
    const [fromValue, setFromValue] = useState('')

    const sendMessage = async (e) => {
      e.preventDefault();

      const { uid, photoURL } = auth.currentUser;

      await messagesRef.add({
        text: fromValue,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        photoURL
      })
      setFromValue('');
    }

    return (
      <>
        <div>

          {messages && messages.map(msg => <ChatMessage key={msg.id} textMessage={msg} />)}

          <form onSubmit={sendMessage}>
            <input value={fromValue} onChange={(e) => setFromValue(e.target.value)} />
            <button type='submit'>Send</button>
          </form>
        </div>
      </>
    )
  }

  const ChatMessage = (props) => {
    const { uid, text, photoURL } = props.textMessage;

    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

    return (
      <div className={`message${messageClass}`}>
        <img src={photoURL} />
        <p>{text}</p>
      </div>
    )
  }

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <Signout />
      </header>
      <section>
        {user ? <ChatRoom /> : <Signin />}
      </section>
    </div>
  );
}

export default App;
