import React from 'react'

export default function UserList({users}) {
  return (
    <ul>
        {
            users.map((item) => (
                <li key={item.id}>
                    {item.name} - {item.age} years old
                </li>
            ))
        }
    </ul>
  )
}
