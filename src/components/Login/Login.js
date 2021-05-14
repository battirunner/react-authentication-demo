import React, { useState } from 'react';
import axios from "axios";
import PropTypes from 'prop-types';

import './Login.css';

export default function Login({ setToken }) {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const handleSubmit  = s => {
        s.preventDefault();
    const credential = {
        email,
        password
    };
    axios
        .post("http://vaccinnote.work/api/login", credential)
        .then(res => {
            setToken(res.data.access_token)
            console.log(res.data)
        })
        .catch(err => {
            console.log(err);
        });
    }
  return(
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setEmail(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)} />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}
Login.propTypes = {
    setToken: PropTypes.func.isRequired
  };