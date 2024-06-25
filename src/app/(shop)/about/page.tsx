import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-4">
      <section className="h-[300px] mb-10 relative flex items-center justify-center overflow-hidden">
        <img
          src="/images/bg1.jpg"
          alt="face"
          className="w-screen h-[300px] object-cover absolute"
        />

        <h1 className="text-white text-sm md:text-3xl font-extrabold z-10">
          ACERCA DE RAINBOW
        </h1>
      </section>
      <section className="h-auto mb-10 p-10">
        <div className="flex ">
          <div className="flex flex-col gap-5 w-[50%]">
            <h1 className="text-black text-4xl font-semibold leading-snug">
              ACERCA DE RAINBOW{" "}
              <strong className="text-orange-500">CLOTHES</strong>
            </h1>
            <p className="font-light text-xl text-gray-500 mb-6 p-5">
              Rainbow Clothes es un emprendimiento colombiano fundado en el año
              2019, cuya única sede física se encuentra ubicada en la ciudad de
              Bogotá y principalmente se dedica a la venta de ropa de estilo
              informal, más específicamente de prendas de vestir de muy buena
              calidad, como chaquetas, pantalones, sacos, blusas, camisetas y
              pantalonetas, para personas de todas las edades y géneros.
            </p>
            <Link
              href="/products"
              className="rounded-3xl bg-black text-white font-semibold p-3 w-max hover:bg-orange-500 transition-colors"
            >
              Comprar ahora
            </Link>
          </div>

          <div className="w-[50%]">
            <img src="/images/1.jpg" alt="men-suit" className="rounded-2xl" />
          </div>
        </div>
      </section>
    </div>
  );
}
