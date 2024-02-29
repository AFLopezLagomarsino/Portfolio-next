"use client";
import Image from "next/image";
import fotoSinFondo from "../../public/foto_sin_fondo.png";
import { TypeAnimation} from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold ">
            Hola! me llamo{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-slate-800 via-red-600 to-slate-800">
              Andres{" "}
            </span>
            <span>y soy </span>
            <br/>
            <TypeAnimation
                sequence={[
                  "Desarrollador Web",
                  1000,
                  "Desarrollador Frontend",
                  1000,
                  "Desarrollador FullStack",
                  1000,
                  "Gamer",
                  1000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
              />
          </h1>
          <p className="text-[#979797] text-base sm:text-lg mb-6 lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="flex justify-center items-center">
            <button className=" px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-slate-800 via-red-600 to-slate-800 hover:bg-slate-950 text-white">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Descargar CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-slate-950 w-[280px] h-[280px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src={fotoSinFondo}
              alt="mi cara"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
