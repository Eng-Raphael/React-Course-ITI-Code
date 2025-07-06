import React, { useEffect, useState } from 'react'

export default function UserListFetch() {


    const [users , setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        
        // fetch('https://jsonplaceholder.typicode.com/users')
        //     .then(response => response.json())
        //     .then(data => setUsers(data))
        //     .catch(error => console.error('Error fetching users:', error));
        // Alternative using async/await

        //     async function fetchUsers() {
        //     const res = await fetch('https://jsonplaceholder.typicode.com/users');
        //     const data = await res.json();
        //     setUsers(data);
        // }

         async function fetchUsers() {
            try {
                    setLoading(true);
                    const res = await fetch('https://jsonplaceholder.typicode.com/users');
                    if (!res.ok) throw new Error('Network error');
                    const data = await res.json();
                    setUsers(data);
                } catch (err) {
                    setError(err.message);
                } finally {
                    setLoading(false);
            }
        }

    fetchUsers();
    }, [])


  return (
            <div>
                <h2>User List</h2>

                {loading && !error && <p>Loading users...</p>}

                {error && <p style={{ color: 'red' }}>Error: {error}</p>}

                {!loading && !error && users.length > 0 && (
                    <ul>
                        {users.map(user => (
                        <li key={user.id}>
                            {user.name} - {user.email}
                        </li>
                        ))}
                    </ul>
                )}

                {!loading && !error && users.length === 0 && (
                    <p>No users found.</p>
                )}
                
            </div>
        )

}
