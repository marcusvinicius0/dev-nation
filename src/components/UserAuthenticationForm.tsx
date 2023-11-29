"use client";

import { cn } from "@/lib/utils";
import { FC, useState } from "react";
import { Button } from "./ui/Button";
import { Icons } from "./Icons";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const UserAuthenticationForm: FC<UserAuthFormProps> = ({className, ...props}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <div className={cn("flex justify-center", className)} {...props}>
      <Button
      onClick={() => {}}
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