import Image from "next/image";

import dnLogo from "../assets/logo/logo-dn.svg";
import { getCurrentYear } from "../lib/utils";
import clsx from "clsx";

export default function Footer() {
  const styles = {
    parent: clsx("h-fit flex flex-col space-y-1.5"),
    ul: clsx("text-sm text-gray-800 flex flex-col gap-1"),
    li: clsx("cursor-pointer hover:opacity-90"),
  };

  const general_columns = [
    "Cadastre-se",
    "Central de ajuda",
    "Sobre",
    "Blog",
    "Carreiras",
    "Programadores",
  ];

  const browse_columns = ["Aprendendo", "Vagas", "Serviços", "Soluções"];

  const directories_columns = [
    "Usuários",
    "Vagas",
    "Empresas",
    "Em destaque",
    "Aprendendo",
    "Publicações",
    "Artigos",
    "Notícias",
    "Serviços",
    "Pesquisa de pessoas",
  ];

  return (
    <footer className="w-full h-fit bg-[#F3F2F0] mt-20 px-3 pt-2 flex flex-col">
      <div className="flex gap-32">
        <Image
          src={dnLogo}
          alt="Logo oficial da Devnation"
          className="object-contain w-32 h-32"
        />

        <div className="flex space-x-28">
          <div className={styles.parent}>
            <h3 className="font-semibold">Geral</h3>
            <ul className={styles.ul}>
              {general_columns.map((item, index) => {
                return (
                  <li key={index} className={styles.li}>
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={styles.parent}>
            <h3 className="font-semibold">Navegar</h3>
            <ul className={styles.ul}>
              {browse_columns.map((item, index) => {
                return (
                  <li key={index} className={styles.li}>
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={styles.parent}>
            <h3 className="font-semibold">Diretórios</h3>
            <ul className={styles.ul}>
              {directories_columns.map((item, index) => {
                return (
                  <li key={index} className={styles.li}>
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      <hr className="my-2" />
      <div className="flex items-center space-x-2 w-fit h-fit">
        <Image
          src={dnLogo}
          alt="Logo oficial da Devnation"
          className="object-contain w-20 h-20"
        />
        <p className="text-xs text-gray-800 font-light">
          © {getCurrentYear()} - Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
