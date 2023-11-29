import SignIn from "@/components/SignIn";
import { FC } from "react";

const page: FC = () => {
  return (
      <div className="h-full max-w-2xl mx-auto flex flex-col items-center justify-center">
        <SignIn />
      </div>
  );
};

export default page;
