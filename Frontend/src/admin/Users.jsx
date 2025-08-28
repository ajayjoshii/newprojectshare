// src/admin/Users.jsx
import React, { useEffect, useState } from "react";
import api from "../utils/api";

export default function Users() {
  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    try {
      const res = await api.get("/admin/users");
      setUsers(res.data.users);
    } catch (err) {
      alert("Failed to fetch users");
    }
  };
  useEffect(() => { fetchUsers(); }, []);

  const toggleAdmin = async (u) => {
    try {
      await api.put(`/admin/users/${u._id}`, { isAdmin: !u.isAdmin });
      fetchUsers();
    } catch (err) { alert("Failed"); }
  };

  const deleteUser = async (u) => {
    if (!confirm("Delete user?")) return;
    try {
      await api.delete(`/admin/users/${u._id}`);
      fetchUsers();
    } catch (err) { alert("Failed"); }
  };

  return (
    <div>
      <h1 className="text-xl font-bold mb-3">Users</h1>
      <div className="space-y-2">
        {users.map(u => (
          <div key={u._id} className="p-3 bg-white rounded shadow flex justify-between items-center">
            <div>
              <div className="font-medium">{u.name} {u.isAdmin && <span className="text-sm text-green-600">[ADMIN]</span>}</div>
              <div className="text-sm text-gray-600">{u.email} • {u.phone}</div>
            </div>
            <div className="flex gap-2">
              <button onClick={() => toggleAdmin(u)} className="px-3 py-1 bg-blue-600 text-white rounded">Toggle Admin</button>
              <button onClick={() => deleteUser(u)} className="px-3 py-1 bg-red-600 text-white rounded">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
