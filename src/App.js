// client/src/App.js
import React from "react";
import RoleAssigner from "./components/RoleAssigner";
import WorkspaceActions from "./components/WorkspaceActions";

function App() {
  const userEmail = "mahendra@example.com"; // hardcoded for now
  const workspaceId = "workspace_abc123";

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">QuickCollab 🔐</h1>
      <RoleAssigner />
      <WorkspaceActions userEmail={userEmail} workspaceId={workspaceId} />
    </div>
  );
}

export default App;
