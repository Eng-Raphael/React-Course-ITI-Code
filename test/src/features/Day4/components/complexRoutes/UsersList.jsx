import { Link } from 'react-router-dom';

export default function UsersList() {
  const users = [
    { id: 1, name: 'Raphael', age: 25 },
    { id: 2, name: 'Mohamed', age: 22 },
  ];

  return (
    <div>
      <h2>Users List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link
              to={`/users/${user.id}`}
              state={{ userName: user.name, age: user.age }}
            >
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
