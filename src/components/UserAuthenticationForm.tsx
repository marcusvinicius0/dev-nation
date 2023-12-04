"use client";

import { cn } from "@/lib/utils";
import { FC, useState } from "react";
import { Button } from "./ui/Button";
import { Icons } from "./Icons";
import { signIn } from "next-auth/react";
import { useToast } from "@/hook/use-toast";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const UserAuthenticationForm: FC<UserAuthFormProps> = ({className, ...props}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { toast } = useToast();

  const loginWithGoogle = async () => {
    setIsLoading(true);
    try {
      await signIn('google');
    } catch (error) {
      // toast notification
      toast({
        title: "There was a problem.",
        description: "There was an error loggin in with Google",
        variant: 'destructive',
      })
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className={cn("flex justify-center", className)} {...props}>
      <Button
      onClick={loginWithGoogle}
      isLoading={isLoading}
      size="sm"
      className="w-full"
      variant="subtle"
      >
        {isLoading ? null : <Icons.google className="h-4 w-4 mr-2" />}
        Google
      </Button>
    </div>
  )
}

export default UserAuthenticationForm;