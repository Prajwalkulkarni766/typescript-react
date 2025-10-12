import { useState } from 'react';

type User = {
  name: string,
  email: string,
  token: string
}

export default function Auth() {

  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logIn = () => {
    setUser({
      name: 'John',
      email: 'john@gmail.com',
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30'
    })
    setIsLoggedIn(true)
  }

  const logOut = () => {
    setUser(null);
    setIsLoggedIn(false)
  }

  return (
    <div>
      <h1>Auth Page</h1>
      <button onClick={logIn}>Log In</button>
      <button onClick={logOut}>Log Out</button>
      <p>Status: {isLoggedIn ? 'User is logged in' : 'User is logged out'}</p>
      <span>{user && <>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>token: {user.token}</p>
      </>}</span>
    </div>
  )
}