"use client";
import { useState } from "react";
import Link from "next/link";

import { Input } from "./ui/Input";
import { Button } from "./ui/Button";

import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { FcGoogle } from "react-icons/fc";

type Inputs = {
  email: string;
  password: string;
};

const SignIn = () => {
  const [handlePassVisibility, setHandlePassVisibility] =
    useState<boolean>(false);

  const handleChangePasswordVisibility = () =>
    setHandlePassVisibility(!handlePassVisibility);

  return (
    <div className="flex flex-col space-y-10">
      <h1 className="text-4xl text-gray-800 font-medium">
        Conheça sua comunidade <br /> de devs
      </h1>

      <form onSubmit={() => {}} className="flex flex-col ml-4 space-y-6 w-fit">
        <label htmlFor="" className="flex flex-col gap-2 text-md">
          E-mail
          <label className="relative">
            <span className="absolute top-2">
              <Mail className="w-4 h-4" />
            </span>
            <Input
              type="email"
              className="border-b-2 w-96 h-8 outline-none px-5"
            />
          </label>
        </label>
        <label className="flex flex-col gap-2 text-md w-fit">
          Senha
          <label htmlFor="" className="relative">
            <span className="absolute top-2">
              <Lock className="w-4 h-4" />
            </span>
            <Input
              type={!handlePassVisibility ? "password" : "text"}
              className="border-b-2 w-96 h-8 outline-none pl-5 pr-8 "
            />
            <span
              className="absolute top-2 right-2 cursor-pointer"
              onClick={handleChangePasswordVisibility}
            >
              {handlePassVisibility ? (
                <>
                  <Eye className="w-4 h-4" />
                </>
              ) : (
                <>
                  <EyeOff className="w-4 h-4" />
                </>
              )}
            </span>
          </label>
        </label>

        <Link href="/" className="w-fit text-sm">
          Esqueceu a senha?
        </Link>

        <Button variant="default" size="lg" type="submit">
          Entrar
        </Button>
        <p className="text-center font-semibold">ou</p>

        <button className="border p-2 rounded-md flex justify-center items-center gap-4 hover:opacity-80">
          <FcGoogle className="w-5 h-5" />
          Continue com google
        </button>

        <p className="text-sm">
          Ainda não faz parte da DevNation?{" "}
          <Link href="/registro" className="text-blue-500 hover:opacity-80">
            Cadastre-se agora!
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
