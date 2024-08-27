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
import { TriangleAlert } from "lucide-react";
import { useAuthActions } from "@convex-dev/auth/react";

interface SignUpCardProps {
  setState: (state: SignInFlow) => void;
}

export const SignUpCard = ({ setState }: SignUpCardProps) => {
  const { signIn } = useAuthActions();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  const handleProviderSignUp = (value: "github" | "google") => {
    setPending(true);
    signIn(value).finally(() => {
      setPending(false);
    });
  };

  const onPasswordSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setPending(true);
    signIn("password", { email, password, flow: "signUp" })
      .catch(() => {
        setError("Something went wrong!!");
      })
      .finally(() => {
        setPending(false);
      });
  };

  return (
    <Card className='w-full h-full p-8'>
      <CardHeader className='px-0 pt-0'>
        <CardTitle>Sign Up to continue</CardTitle>
        <CardDescription>
          Use your email or another services to continue
        </CardDescription>
      </CardHeader>
      {!!error && (
        <div className='bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive mb-6'>
          <TriangleAlert className='size-4' />
          <p>{error}</p>
        </div>
      )}
      <CardContent className='space-y-5 px-0 pb-0'>
        <form onSubmit={onPasswordSignUp} className='space-y-2.5'>
          <Input
            disabled={pending}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email'
            type='email'
            required
          />

          <Input
            disabled={pending}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
            type='password'
            required
          />

          <p className='text-xs text-gray-500 mt-2'>
            <span className='text-red-500 font-bold'>*</span> Password must
            contain
            <span className='font-semibold text-black'>
              {" "}
              capital letters (A-Z)
            </span>
            ,<span className='font-semibold text-black'> numbers (0-9)</span>,
            and
            <span className='font-semibold text-black'> symbols (!@#$%*)</span>.
          </p>

          <Input
            disabled={pending}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder='Confirm Password'
            type='password'
            required
          />

          <Button className='w-full' type='submit' size='lg' disabled={pending}>
            Continue
          </Button>
        </form>

        <Separator />
        <div className='flex flex-col gap-y-2.5'>
          <Button
            className='w-full relative'
            variant='outline'
            size='lg'
            disabled={pending}
            onClick={() => handleProviderSignUp("google")}
          >
            <FcGoogle className='size-5 absolute top-2.5 left-2.5' />
            Continue with Google
          </Button>
          <Button
            className='w-full relative'
            variant='outline'
            size='lg'
            disabled={pending}
            onClick={() => handleProviderSignUp("google")}
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




// 1:37:00