import Link from "next/link";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoYoutube,
} from "react-icons/io5";

export const Footer = () => {
  return (
    <footer className="h-max bg-gray-950">
      <div className="flex flex-col md:flex-row p-8 md:p-16">
        {/* --------- LEFT CONTENT ------------- */}
        <div className="flex flex-col gap-6 w-[95%] md:w-[40%] mr-10 mb-10 ">
          <Link href={"/"} className="text-white text-3xl font-semibold">
            RAINBOW <strong className="text-orange-500">CLOTHES</strong>
          </Link>
          <p className="font-light text-xl text-gray-500">
            Te invitamos a que nos sigas en nuestras redes sociales, haz parte
            de nuestra comunidad y recibe grandes promociones ¡Cuéntanos tu
            experiencia!
          </p>
          <div className="flex text-white">
            <Link href="/" className="mx-2">
              <IoLogoFacebook className="w-5 h-5" />
            </Link>
            <Link href="/" className="mx-2">
              <IoLogoInstagram className="w-5 h-5" />
            </Link>
            <Link href="/" className="mx-2">
              <IoLogoYoutube className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* ----------- RIGHT CONTENT -------------- */}
        <div className="flex flex-col w-[95%] md:w-[60%]">
          <h1 className="text-white mb-8 text-4xl leading-relaxed">
            Estamos felices de tenerte en nuestra tienda, tanto virtual como
            fisica, no dudes en contactarnos o visitarnos.
          </h1>
          <div className="flex flex-col md:flex-row text-white">
            <div className="flex flex-col gap-5 mb-10">
              <h2>PRINCIPALES LINKS</h2>
              <div className="font-light text-xl text-gray-500 flex flex-col gap-2 w-[300px] ">
                <Link href="/">Inicio</Link>
                <Link href="/">Sobre nosotros</Link>
                <Link href="/">Blog</Link>
                <Link href="/">Contacto</Link>
                <Link href="/">Terminos y condiciones</Link>
                <Link href="/">Politicas de privacidad</Link>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <h2>NUESTRA SEDE FISICA</h2>
              <span className="font-light text-xl text-gray-500">
                Carrera 11 # 82-71 - Centro Comercial Andino Bogotá - Colombia
              </span>
              <h2>ACEPTAMOS COMO MEDIO DE PAGO:</h2>
              <img src="/images/card_img.png" alt="cards" className="w-[50%]" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-700 h-[1px] mx-8" />
      <div className="flex justify-center p-8">
        <span className="text-white font-extralight justify-self-center mb-10">
          &copy; Rainbow clothes - Todos los derechos reservados.
        </span>
      </div>
    </footer>
  );
};
