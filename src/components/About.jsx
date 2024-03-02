"use client";
import { useTransition, useState } from "react";
import Image from "next/image";
import gif from "../../public/codeo2.gif";
import TabButton from "./TabButton";
import { data } from "../utils/data";

function About() {
  const [tab, setTab] = useState("Tecnologias");
  const [isPending, startTransition] = useTransition({});

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white ">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16">
        <Image src={gif} width={1000} height={1000} alt="codeo" />
      <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
        <h2 className="text-4xl font-bold text-white mb-4">Sobre mi</h2>
        <p className="text-base lg:text-lg">
          Hola! En un principio era estudiante de la carrera de Licenciatura en Biotecnología
          pero en la actualidad me dedico a la programación. Soy desarrollador FullStack graduado
          en SoyHenry pero mi orientación es hacia el FrontEnd y aspiro algun día poder llegar a ser
          programador de videojuegos y crear paginas en 3D. Me encanta brindar una gran
          experiencia de usuario en cada proyecto que realizo. Por lo que me encantaría ser un gran colaborador
          en tu equipo si deseas contratarme.
        </p>
        <div className="flex flex-row justify-start mt-8">
          <TabButton
            selectTab={() => handleTabChange("Tecnologias")}
            active={tab === "Tecnologias"}
          >
            {" "}
            Tecnologías{" "}
          </TabButton>
          <TabButton
            selectTab={() => handleTabChange("Educacion")}
            active={tab === "Educacion"}
          >
            {" "}
            Educación{" "}
          </TabButton>
          <TabButton
            selectTab={() => handleTabChange("Certificaciones")}
            active={tab === "Certificaciones"}
          >
            {" "}
            Certificaciones{" "}
          </TabButton>
        </div>
        <div className="mt-4">
          {data.find((item) => item.id === tab).content}
        </div>
      </div>
      </div>
    </section>
  );
}

export default About;
