"use client";
import { useState } from "react";
import {ToastContainer, toast, Zoom} from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import GithubIcon from "../../public/github.svg";
import LinkedinIcon from "../../public/linkedin.svg";
import Link from "next/link";
import Image from "next/image";
import { RocketLaunchIcon } from "@heroicons/react/24/outline";

const EmailSection = () => {

  const notify = () => toast.success("Email enviado!",{
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Zoom,
  });

  const [input, setInput] = useState({
    email:"",
    subject:"",
    message:""
  })

  function handleChange(e){
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e){
    setInput({
      email:"",
      subject:"",
      message:""
    })
  }


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
          <Link   target="_blank" href="https://github.com/AFLopezLagomarsino">
            <Image src={GithubIcon} alt="github" width={50} />
          </Link>
          <Link target="_blank" href="https://www.linkedin.com/in/andres-lopez-lagomarsino/">
            <Image src={LinkedinIcon} alt="linkedin" width={50} />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col" action="https://formsubmit.co/andresinfernoxii@gmail.com" method="POST" onSubmit={e=>handleSubmit(e)}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Tu email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="escribe tu email aqui"
              onChange={e=>handleChange(e)}
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
              name="subject"
              required
              placeholder="escribe tu asunto aqui"
              onChange={e=>handleChange(e)}
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
              placeholder="escribe tu mensaje aqui"
              onChange={e=>handleChange(e)}
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <button
            onClick={notify}
            type="submit"
            className="bg-red-800 hover:bg-red-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Enviar email
          </button>
          <input type="hidden" name="_next" value="https://portfolio-andreslago.vercel.app/" />
          <input type="hidden" name="_captcha" value="false" />
        </form>
        <ToastContainer
        icon={<RocketLaunchIcon/>}/>
      </div>
    </section>
  );
};

export default EmailSection;
