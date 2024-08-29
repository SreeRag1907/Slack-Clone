"use client";
import { useEffect, useMemo, useState } from "react";
import { UserButton } from "../features/auth/components/user-button";
import { useGetWorkspaces } from "../features/workspaces/api/use-get-workspaces";
import { useCreateWorkspaceModal } from "../features/store/use-create-workspace-modal";
export default function Home() {
  const [open, setOpen] = useCreateWorkspaceModal();

  const { data, isLoading } = useGetWorkspaces();

  const workspaceId = useMemo(() => data?.[0]?._id, [data]);

  useEffect(() => {
    if (isLoading) return;

    if (workspaceId) {
      console.log("rediretc to workspaces");
    } else if (!open) {
      setOpen(true);
    }
  }, [workspaceId, isLoading ,open,setOpen]);

  return (
    <div>
      <UserButton />
    </div>
  );
}

//2:01
