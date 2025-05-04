// client/src/components/WorkspaceActions.js
import React, { useEffect, useState } from "react";
import { checkPermission } from "../api/permit";

const WorkspaceActions = ({ userEmail, workspaceId }) => {
  const [canDelete, setCanDelete] = useState(false);

  useEffect(() => {
    const check = async () => {
      const allowed = await checkPermission(
        `user:${userEmail}`,
        `workspace:${workspaceId}`,
        "delete"
      );
      setCanDelete(allowed);
    };
    check();
  }, [userEmail, workspaceId]);

  return (
    <div className="mt-4">
      <h2 className="text-lg font-semibold">Workspace Actions</h2>
      {canDelete ? (
        <button className="bg-red-500 text-white px-4 py-2 rounded">Delete Workspace</button>
      ) : (
        <p className="text-sm text-gray-500">You don’t have permission to delete this workspace.</p>
      )}
    </div>
  );
};

export default WorkspaceActions;
