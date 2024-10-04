import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const hardcodedUsers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
  { id: 3, name: 'Sam Wilson', email: 'sam@example.com', role: 'Moderator' },
];

const UserList = () => {
  const [users, setUsers] = useState(hardcodedUsers);
  const [deleteUserId, setDeleteUserId] = useState(null);

  const handleDeleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6">All Users</h2>

        <div className="mb-6 flex justify-end">
          <Link to="/admin/add-user" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Add New User
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-200 text-gray-600 text-left">
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Role</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-t">
                  <td className="px-4 py-2">{user.id}</td>
                  <td className="px-4 py-2">{user.name}</td>
                  <td className="px-4 py-2">{user.email}</td>
                  <td className="px-4 py-2">{user.role}</td>
                  <td className="px-4 py-2">
                    <Link to={`/admin/edit-user/${user.id}`} className="bg-blue-500 text-white px-4 py-1  rounded-lg mr-2">
                      Edit
                    </Link>
                    <button
                      onClick={() => setDeleteUserId(user.id)}
                      className="bg-red-500 text-white px-4 py-1 mt-2 rounded-lg"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Confirmation Modal for Delete */}
      {deleteUserId && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl mb-4">Are you sure you want to delete this user?</h3>
            <div className="flex justify-end">
              <button
                onClick={() => setDeleteUserId(null)}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg mr-2"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  handleDeleteUser(deleteUserId);
                  setDeleteUserId(null);
                }}
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserList;
