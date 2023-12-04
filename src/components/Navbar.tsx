import Image from "next/image";
import Link from "next/link";

import dnLogo from "../assets/logo/logo-dn.svg";

import {
  Newspaper,
  Users,
  Building,
  Briefcase,
  MessagesSquare,
  Search,
  Bell,
} from "lucide-react";
import { buttonVariants } from "./ui/Button";

const Navbar = async () => {
  const isAuthenticated = false;
  const id = 1023;

  return (
    <>
      {isAuthenticated ? (
        <header className="h-20 w-full fixed top-0 px-6 py-3 flex flex-row justify-between bg-white shadow-md z-50">
          <div className="flex items-center">
            <Link href="/feed">
              <Image
                src={dnLogo}
                alt="Logo oficial da DevNation"
                width={150}
                height={40}
                className="cursor-pointer hover:opacity-80"
              />
            </Link>
          </div>

          <div className="flex flex-row items-center space-x-24">
            <nav className="mt-2">
              <ul className="flex items-center space-x-8 text-sm text-gray-800">
                <Link href="/">
                  <li className="flex flex-col items-center">
                    <Newspaper className="w-4 h-4 text-zinc-900" />
                    Artigos
                  </li>
                </Link>
                <Link href="/">
                  <li className="flex flex-col items-center">
                    <Briefcase className="w-4 h-4" />
                    Vagas
                  </li>
                </Link>
                <Link href="/">
                  <li className="flex flex-col items-center">
                    <MessagesSquare className="w-4 h-4" />
                    Mensagens
                  </li>
                </Link>
                <Link href="/">
                  <li className="flex flex-col items-center">
                    <Bell className="w-4 h-4" />
                    Notificações
                  </li>
                </Link>
              </ul>
            </nav>

            <div className="flex flex-row items-center space-x-6">
              <span className="cursor-pointer hover:opacity-80">
                <Search className="w-4 h-4" />
              </span>

              <Link href={`/perfil/${id}`}>
                <Image
                  src="https://github.com/marcusvinicius0.png"
                  alt="Avatar do usuário"
                  width={40}
                  height={40}
                  className="object-contain rounded-full"
                />
              </Link>
            </div>
          </div>
        </header>
      ) : (
        <header className="h-20 w-full fixed top-0 px-6 py-3 flex flex-row justify-between bg-white shadow-md z-50">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src={dnLogo}
                alt="Logo oficial da DevNation, um 'D' e 'N' modernos."
                width={150}
                height={40}
                className="cursor-pointer hover:opacity-80"
              />
            </Link>
          </div>

          <div className="flex flex-row items-center space-x-24">
            <nav className="mt-2">
              <ul className="flex items-center space-x-8 text-sm text-gray-800">
                <Link href="/article">
                  <li className="flex flex-col items-center">
                    <Newspaper className="w-4 h-4" />
                    Artigos
                  </li>
                </Link>
                <Link href="/">
                  <li className="flex flex-col items-center">
                    <Users className="w-4 h-4" />
                    Pessoas
                  </li>
                </Link>
                <Link href="/">
                  <li className="flex flex-col items-center">
                    <Building className="w-4 h-4" />
                    Empresa
                  </li>
                </Link>
                <Link href="/">
                  <li className="flex flex-col items-center">
                    <Briefcase className="w-4 h-4" />
                    Vagas
                  </li>
                </Link>
              </ul>
            </nav>

            <Link href="/entrar" className={buttonVariants({
              variant: "default",
              size: "default"
            })}>
              Entrar
            </Link>
          </div>
        </header>
      )}
    </>
  );
};

export default Navbar;
