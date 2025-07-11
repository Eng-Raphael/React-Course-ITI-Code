import { useParams, useLocation } from 'react-router-dom';

export default function UserDetails() {
  const { id } = useParams();
  const location = useLocation();
  const state = location.state;

  return (
    <div>
      <h2>User Details Page</h2>
      <p><strong>User ID from URL:</strong> {id}</p>

      {state ? (
        <>
          <p><strong>User Name from state:</strong> {state.userName}</p>
          <p><strong>Age from state:</strong> {state.age}</p>
        </>
      ) : (
        <p><em>No state data passed!</em></p>
      )}
    </div>
  );
}
