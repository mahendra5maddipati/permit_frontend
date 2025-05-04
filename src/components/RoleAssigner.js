// client/src/components/RoleAssigner.js
import React, { useState } from "react";
import { assignRole } from "../api/permit";

const RoleAssigner = () => {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("viewer");
  const [workspaceId, setWorkspaceId] = useState("");

  const handleAssign = async () => {
    try {
      await assignRole(email, role, workspaceId);
      alert("Role assigned!");
    } catch (err) {
      alert("Failed to assign role.");
      console.error(err);
    }
  };

  return (
    <div className="p-4 border rounded">
      <h2 className="text-lg font-bold mb-2">Assign Role</h2>
      <input placeholder="User Email" onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="Workspace ID" onChange={(e) => setWorkspaceId(e.target.value)} />
      <select onChange={(e) => setRole(e.target.value)}>
        <option value="admin">Admin</option>
        <option value="manager">Manager</option>
        <option value="editor">Editor</option>
        <option value="viewer">Viewer</option>
      </select>
      <button onClick={handleAssign}>Assign</button>
    </div>
  );
};

export default RoleAssigner;
