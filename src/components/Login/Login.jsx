import React, { useState } from 'react';
import axios from 'axios';

const Login = ({hiddenLoginState, onLoginComplete}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://three-points.herokuapp.com/api/login', {
        username: username,
        password: password,
      });
      localStorage.setItem('token', response.data.token);
      setError('');
      setUsername('');
      setPassword('');
      onLoginComplete()
    } catch (error) {
      setError(error.message)
      setUsername('');
      setPassword('');
    }
  };

  return (
    <div className="card border border-0" id='login-card' hidden={hiddenLoginState}>
        <div className="card-body d-flex justify-content-center">
            <form onSubmit={handleLogin}>
                {error && (
                    <div className="alert alert-danger" role="alert">
                        {error}
                    </div>
                )}
                <div className="row mb-3">
                    <label htmlFor="username" className='form-label'>Username</label>
                    <input
                    type="text"
                    id="username"
                    className='form-control'
                    aria-describedby="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="row mb-3">
                    <label htmlFor="password" className='form-label'>Password</label>
                    <input
                    type="password"
                    id="password"
                    className='form-control'
                    aria-describedby="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="row px-5">
                    <button type="submit" className='btn btn-primary text-center'>Login</button>
                </div>
            </form>
        </div>
    </div>
  );
};

export default Login;
