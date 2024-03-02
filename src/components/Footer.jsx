import Image from "next/image"
import Logo from "../../public/LogoXII.png"

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#141414] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-center items-center lg:ml-40">
        <Image src={Logo} alt="Logo" width={100} height={100}/>
      </div>
    </footer>
  )
}

export default Footer
