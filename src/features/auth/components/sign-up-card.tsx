import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";
import { Separator } from "@/src/components/ui/separator";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { SignInFlow } from "../types";
import { useState } from "react";

interface SignUpCardProps {
  setState: (state: SignInFlow) => void;
}

export const SignUpCard = ({ setState }: SignUpCardProps) => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <Card className='w-full h-full p-8'>
      <CardHeader className='px-0 pt-0'>
        <CardTitle>Sign Up to continue</CardTitle>
        <CardDescription>
          Use your email or another services to continue
        </CardDescription>
      </CardHeader>
      <CardContent className='space-y-5 px-0 pb-0'>
        <form action='' className='space-y-2.5'>
          <Input
            disabled={false}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email'
            type='email'
            required
          />
          <Input
            disabled={false}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
            type='password'
            required
          />
          <Input
            disabled={false}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder='Confirm Password'
            type='password'
            required
          />

          <Button className='w-full' type='submit' size='lg' disabled={false}>
            Continue
          </Button>
        </form>
        <Separator />
        <div className='flex flex-col gap-y-2.5'>
          <Button
            className='w-full relative'
            variant='outline'
            size='lg'
            disabled={false}
            onClick={() => {}}
          >
            <FcGoogle className='size-5 absolute top-2.5 left-2.5' />
            Continue with Google
          </Button>
          <Button
            className='w-full relative'
            variant='outline'
            size='lg'
            disabled={false}
            onClick={() => {}}
          >
            <FaGithub className='size-5 absolute top-2.5 left-2.5' />
            Continue with Github
          </Button>
        </div>
        <p className='text-xs  text-muted-foreground'>
          Already have an account?
          <span
            onClick={() => setState("signIn")}
            className='text-sky-600 hover:underline cursor-pointer'
          >
            Sign up
          </span>
        </p>
      </CardContent>
    </Card>
  );
};
