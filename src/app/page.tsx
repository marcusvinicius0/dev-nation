import Image from "next/image";

import futuristicImg from "../assets/image/undraw_futuristic_interface.svg";
import { ChevronRight } from "lucide-react";
import SignIn from "@/components/SignIn";

export default function Home() {
  const researchSuggestions = [
    {
      name: "engenheria",
      title: "Engenharia",
      icon: "",
    },
    {
      name: "recursos humanos",
      title: "Recursos humanos",
      icon: "",
    },
    {
      name: "desenvolvimento",
      title: "Desenvolvimento",
      icon: "",
    },
    {
      name: "ti",
      title: "Tecnologia da informação",
      icon: "",
    },
    {
      name: "marketing",
      title: "Marketing",
      icon: "",
    },
    {
      name: "devops",
      title: "Devops",
      icon: "",
    },
    {
      name: "designer",
      title: "Designer",
      icon: "",
    },
    {
      name: "uiux",
      title: "UI/UX",
      icon: "",
    },
  ];

  const groupsSuggestions = [
    {
      name: "javascript",
      title: "Javascript",
      icon: "",
    },
    {
      name: "desenvolvimentoweb",
      title: "Desenvolvimento Web",
      icon: "",
    },
    {
      name: "backend",
      title: "Backend",
      icon: "",
    },
    {
      name: "uiux",
      title: "UI/UX",
      icon: "",
    },
    {
      name: "geral",
      title: "Geral",
      icon: "",
    },
  ];

  return (
    <main>
      <section className="mt-40 flex justify-between p-4">
        <SignIn />
        <Image
          src={futuristicImg}
          alt="Imagem futurística"
          width={450}
          height={450}
        />
      </section>

      <section className="mt-14 p-4 flex space-x-14">
        <h2 className="text-4xl text-gray-800 font-medium">
          Encontre o <br /> emprego ou estágio <br /> certo para você
        </h2>
        <div className="flex flex-col">
          <h3 className="text-gray-800 font-light mb-2">
            Sugestões de pesquisa
          </h3>
          <div className="flex flex-wrap gap-4 w-[26rem]">
            {researchSuggestions.map((suggestion) => {
              return (
                <ul
                  key={suggestion.name}
                  className="bg-blue-500/10 text-sm font-light w-32 h-fit px-1 py-0.5 rounded-xl"
                >
                  <li className="overflow-hidden text-ellipsis text-center font-medium cursor-pointer">
                    {suggestion.title}
                  </li>
                </ul>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mt-20 p-4 bg-[#F1ECE5] flex items-center gap-20">
        <h2 className="text-3xl">
          Anuncie sua vaga e alcance <br /> diversos desenvolvedores
        </h2>

        <button className=" bg-blue-500 text-white font-semibold h-fit p-2.5 rounded-full">
          Anuncie uma vaga
        </button>
      </section>

      <section className="mt-20 p-4 flex space-x-14">
        <div className="flex flex-col space-y-2">
          <h2 className="text-3xl">
            Participe de grupos <br /> com diversos temas
          </h2>
          <p>
            Veja o que outros desenvolvedores estão estudando <br /> e projetos
            pessoais que estão trabalhando.
          </p>
        </div>
        <div className="flex flex-col">
          <h3 className="text-gray-800 font-light mb-2">Sugestões de grupos</h3>

          <div className="flex flex-wrap gap-4 w-[26rem]">
            {groupsSuggestions.map((suggestion) => {
              return (
                <ul
                  key={suggestion.name}
                  className="bg-blue-500/10 text-sm font-light w-32 h-fit px-1 py-0.5 rounded-xl"
                >
                  <li className="overflow-hidden text-ellipsis text-center font-medium cursor-pointer">
                    {suggestion.title}
                  </li>
                </ul>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mt-20 p-4 bg-[#F3F2F0] w-8/12 flex flex-col space-y-8 rounded-sm">
        <div className="flex flex-col ">
          <h2 className="text-3xl">
            Para quem a DevNation <br /> foi feita?
          </h2>
          <h4 className="text-2xl">
            Para profissionais da tecnologia buscando <br /> oportunidades ou
            mais networking.
          </h4>
        </div>

        <ul className="flex flex-col space-y-6">
          <li className="bg-[#EAE6DF] p-3 w-80 rounded-md flex items-center justify-between cursor-pointer hover:opacity-80">
            Encontre um colega de trabalho
             <ChevronRight className="w-4 h-4" />
          </li>
          <li className="bg-[#EAE6DF] p-3 w-80 rounded-md flex items-center justify-between cursor-pointer hover:opacity-80">
            Encontre um emprego
             <ChevronRight className="w-4 h-4" />
          </li>
          <li className="bg-[#EAE6DF] p-3 w-80 rounded-md flex items-center justify-between cursor-pointer hover:opacity-80">
            Encontre um curso ou treinamento
             <ChevronRight className="w-4 h-4" />
          </li>
        </ul>
      </section>
    </main>
  );
}
