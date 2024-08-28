"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/src/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";
import { useCurrentUser } from "../hooks/use-current-user";
import { Loader } from "lucide-react";

export const UserButton = () => {
  const { data, isLoading } = useCurrentUser();

  if (isLoading) {
    return <Loader className='size-4 animate-spin text-muted-foreground' />;
  }
  if (!data) {
    return null;
  }

  const { image, name, email } = data;

  //1;48:47

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger className='outline-none relative'>
        <Avatar className='size-10 hover:opacity-75 transition'>
          <AvatarImage />
          <AvatarFallback></AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='center' side='right' className='w-60'>
        <DropdownMenuItem>Sign out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
