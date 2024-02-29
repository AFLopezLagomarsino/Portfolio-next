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
          aca va a ir el sobre mi que todavia no lo escribi pero cuando termine
          este portafolio va a quedar re chala aunque todavia ni lo pense pero
          por lo menos algo va a quedar porque necesito que me contraten para
          poder comer un sanguchito bien rico, aunque tambien puede ser una
          pizza o alguna otra cosa rica, por favor quiero ganar unos dolares,
          porque los pesos argentinos estan re mal valorizados y por eso
          necesito unos dolares, pero solo si no es mucha molestia, pero bueno
          eso, dale que quiero laburar uwu
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
