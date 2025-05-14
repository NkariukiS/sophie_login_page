import React, { useState } from 'react';
import { auth, googleProvider, facebookProvider } from './firebase';
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Logged in successfully!");
    } catch (err) {
      alert(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert("Logged in with Google!");
    } catch (err) {
      alert(err.message);
    }
  };

  const handleFacebookLogin = async () => {
    try {
      await signInWithPopup(auth, facebookProvider);
      alert("Logged in with Facebook!");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>Welcome Back 👋</h2>
        <input
          type="email"
          placeholder="Email"
          style={styles.input}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          style={styles.input}
          onChange={e => setPassword(e.target.value)}
        />
        <button style={styles.button} onClick={handleEmailLogin}>
          Login with Email
        </button>
        <hr style={styles.hr} />
        <button style={styles.googleButton} onClick={handleGoogleLogin}>
          🔵 Login with Google
        </button>
        <button style={styles.fbButton} onClick={handleFacebookLogin}>
          🔷 Login with Facebook
        </button>
      </div>
    </div>
  );
}

const styles = {
  page: {
    height: '100vh',
    background: 'linear-gradient(135deg, #c850c0, #4158d0)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  card: {
    backgroundColor: 'white',
    padding: '40px',
    borderRadius: '12px',
    boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
    width: '350px',
    textAlign: 'center',
  },
  title: {
    marginBottom: '20px',
    color: '#333',
  },
  input: {
    width: '100%',
    padding: '12px',
    marginBottom: '15px',
    borderRadius: '6px',
    border: '1px solid #ddd',
    fontSize: '14px',
  },
  button: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#6c63ff',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 'bold',
    marginBottom: '15px',
  },
  hr: {
    margin: '15px 0',
    border: 'none',
    borderTop: '1px solid #eee',
  },
  googleButton: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#db4437',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    marginBottom: '10px',
  },
  fbButton: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#4267B2',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
};

export default LoginPage;
