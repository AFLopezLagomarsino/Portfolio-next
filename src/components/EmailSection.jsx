import GithubIcon from "../../public/github.svg";
import LinkedinIcon from "../../public/linkedin.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-600 to-tranparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2 ">

      </div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Contactame!</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          si te gustaria trabajar conmigo, o tienes alguna pregunta, no dudes en
          contactarme y te repondere apenas pueda!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/AFLopezLagomarsino">
            <Image src={GithubIcon} alt="github" width={50} />
          </Link>
          <Link href="https://www.linkedin.com/in/andres-lopez-lagomarsino/">
            <Image src={LinkedinIcon} alt="linkedin" width={50} />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Tu email
            </label>
            <input
              type="email"
              id="email"
              required
              placeholder="Email"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block mb-2 text-sm font-medium"
            >
              Asunto
            </label>
            <input
              type="text"
              id="subject"
              required
              placeholder="escribe tu asunto aqui :D"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Mensaje
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="escribee tu mensaje aqui :V"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <button
            type="submit"
            className="bg-red-800 hover:bg-red-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Enviar email
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
