import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';

function UserTable({ users }) {
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>ID</th>
          <th>이름</th>
          <th>이메일</th>
          <th>권한</th>
          <th>생성일시</th>
          <th>수정일시</th>
        </tr>
      </thead>
      <tbody>
        {users.map((u) => (
          <tr key={u.id}>
            <td>{u.id}</td>
            <td>{u.username}</td>
            <td>{u.email}</td>
            <td>{u.role}</td>
            <td>{new Date(u.createdAt).toLocaleString()}</td>
            <td>{new Date(u.updatedAt).toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

UserTable.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default UserTable;
