import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);


  const handleLogin = () => {
    if (email === 'admin@gmail.com' && password === '1234') {
      setLoggedIn(true);

    } else {
      alert('Credenciales incorrectas. Por favor, intenta de nuevo.');
    }
  };
  if (loggedIn) {
    return <Link to="/add-pet">go to Pet Specification</Link>;
  }

  return (
    <div>
      <h2>Login to PawsConnect</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;