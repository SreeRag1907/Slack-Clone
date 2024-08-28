"use client";

import { useAuthActions } from "@convex-dev/auth/react";
import { Button } from "../components/ui/button";
import { UserButton } from "./auth/components/user-button";
export default function Home() {

  const {signOut} = useAuthActions();

  return (
    <div>
      Logged In!!
      <UserButton/>
    </div>
  );
}
