import React from 'react'
import { checkUser } from '../../lib/checkUser'

export default function Navbar() {
  const user = checkUser();

  return (
    <div>
      Navbar
      {user && (
        <span style={{ marginLeft: '8px' }}>
          {typeof user === 'string' ? user : JSON.stringify(user)}
        </span>
      )}
    </div>
  )
}
