"use client";
import Image from "next/image";
import fotoSinFondo from "../../public/foto_sin_fondo.png";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {

  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl leading-normal font-extrabold ">
            Hola! me llamo{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-slate-800 via-red-600 to-slate-800">
              Andres{" "}
            </span>
            <span>y soy </span>
            <br />
            <TypeAnimation
              sequence={[
                "Developer Web",
                1000,
                "Developer Frontend",
                1000,
                "Developer FullStack",
                1000,
                "Gamer",
                1000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
            />
          </h1>
          <div className="flex justify-center items-center">
            <button className=" px-1 py-1 w-full sm:w-fit rounded-full mr-4 mt-10 bg-gradient-to-br from-slate-800 via-red-600 to-slate-800 hover:bg-slate-950 text-white">
              <a download href="/AndresCV.pdf" className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Descargar CV
              </a>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-slate-950 w-[280px] h-[280px] lg:w-[310px] lg:h-[310px] relative overflow-hidden ">
            <Image
              src={fotoSinFondo}
              alt="mi cara"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 mt-4"
              width={350}
              height={350}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
