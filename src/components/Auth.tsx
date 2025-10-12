import { useState } from 'react';

export default function Auth() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logIn = () => {
    setIsLoggedIn(true)
  }

  const logOut = () => {
    setIsLoggedIn(false)
  }

  return (
    <div>
      <button onClick={logIn}>Log In</button>
      <button onClick={logOut}>Log Out</button>
      <p>Status: {isLoggedIn ? 'User is logged in' : 'User is logged out'}</p>
    </div>
  )
}