import React, { useEffect, useState } from 'react';
import UserService from '../class/api/UserService';
import UserTable from '../components/UserTable';
import { Container, Alert, Spinner } from 'react-bootstrap';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    (async () => {
      const res = await UserService.list();
      if (res.ok) setUsers(res.data);
      else setError(res.message);
      setLoading(false);
    })();
  }, []);

  return (
    <Container className="py-4">
      <h2 className="mb-3">사용자 목록</h2>

      {loading && <Spinner animation="border" />}
      {error && <Alert variant="danger">{error}</Alert>}
      {!loading && !error && <UserTable users={users} />}
    </Container>
  );
}
