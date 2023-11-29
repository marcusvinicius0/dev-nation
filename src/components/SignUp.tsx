import Link from "next/link";
import { Icons } from "./Icons";
import UserAuthenticationForm from "./UserAuthenticationForm";
import { buttonVariants } from "./ui/Button";

const SignUp = () => {
  return (
    <div className="container mx-auto flex flex-col w-full justify-center space-y-6 sm:w-[400px]">
      <div className="flex flex-col space-y-4 text-center">
        <Icons.logo className="mx-auto h-6 w-6" />
        <h1 className="text-2xl font-semibold tracking-tight">
          Bem vindo(a) à Devnation!
        </h1>
        <p className="text-sm max-w-xs mx-auto leading-6">
          Ao continuar, você está autenticando uma conta <b>devnation</b> e concorda
          com nossos{" "}
          <Link href="/" className={buttonVariants({
            variant: "link"
          })}>
            Termos do usuário
          </Link>{" "}
          <span>e</span>{" "}
          <Link href="/" className={buttonVariants({
            variant: "link"
          })}>
            {" "}
            Política de privacidade
          </Link>
          .
        </p>

        <UserAuthenticationForm />

        <p className="px-8 text-center text-sm text-zinc-700">
          Já faz parte da Devnation?{" "}
          <Link
            href="/entrar"
            className="hover:text-zinc-800 text-sm underline underline-offset-4"
          >
            Entrar
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
