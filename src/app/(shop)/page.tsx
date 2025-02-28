import { Slideshow } from "@/components";
import { titleFont } from "@/config/fonts";
import { items } from "@/utils";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-14 md:gap-20">
      {/* ---------- HERO ------------ */}
      <section className="h-[400px] md:h-screen md:mb-20">
        <div className="flex h-[100%]">
          <div className="w-[100%] relative md:w-[65%] rounded-lg">
            <Slideshow />
          </div>
          <div className="relative hidden md:flex w-[35%]">
            <img
              src="/images/left3.jpg"
              alt="men"
              className="h-[100%] w-[100%]"
            />

            <h1
              className={`${titleFont.className} absolute top-72 left-10 text-6xl text-white `}
            >
              Moda masculina
            </h1>
          </div>
        </div>
      </section>

      {/* ---------- BIENVENIDO A RAINBOW CLOTHES SECTION ----------- */}
      <section className="h-auto md:mb-20">
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-black text-xl md:text-4xl font-semibold">
            BIENVENIDO A{" "}
            <strong className="text-orange-500">RAINBOW CLOTHES</strong>
          </h1>
          <h2 className="font-light text-xl text-gray-500 mb-6">
            Calidad y estilo en un solo lugar
          </h2>
          <div className="flex md:justify-center snap-x snap-mandatory w-full overflow-scroll md:overflow-visible cursor-pointer">
            {items.map((el) => (
              <div
                key={el.id}
                className="flex flex-col items-center gap-2 pb-4 px-5"
              >
                <div className="w-[100px] h-[100px]">
                  <img
                    src={el.img}
                    alt={el.descrip}
                    className="object-cover rounded-full"
                  />
                </div>
                <p className="text-black font-medium">{el.descrip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------- APROVECHA LOS GRANDES DECUENTOS QUE TENEMOS EN MODA MASCULINA SECTION --------------- */}
      <section className="h-auto mb-10 px-5 md:p-10">
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col mb-8 md:mb-0 gap-5 md:w-[50%]">
            <h1 className="text-black text-xl md:text-4xl font-semibold leading-snug">
              APROVECHA LOS GRANDES DECUENTOS QUE TENEMOS EN{" "}
              <strong className="text-orange-500">MODA MASCULINA</strong>
            </h1>
            <p className="font-light text-xl text-gray-500 mb-6">
              En Rainbow Clothes podrás encontrar a los mejores precios
              increíbles creaciones por parte de talentosos diseñadores, todo al
              alcance de un click ¡No te quedes sin la tuya!
            </p>
            <Link
              href="/products"
              className="rounded-3xl bg-black text-white font-semibold p-3 w-max hover:bg-orange-500 transition-colors"
            >
              Comprar ahora
            </Link>
          </div>

          <div className="w-full md:mb-0 md:w-[50%]">
            <img src="/images/1.jpg" alt="men-suit" className="rounded-2xl" />
          </div>
        </div>
      </section>

      {/* ------------- NO DEJES ESCAPAR NUESTROS DESCUENTOS EN... SECTION  --------------- */}
      <section className="h-auto mb-10 px-5 md:p-10">
        <div className="flex flex-col md:flex-row-reverse">
          <div className="flex flex-col mb-8 md:mb-0 gap-5 md:w-[50%] text-right">
            <h1 className="text-black text-xl md:text-4xl font-semibold leading-snug">
              NO DEJES ESCAPAR NUESTROS DESCUENTOS EN {""}
              <strong className="text-orange-500">ACCESORIOS FEMENINOS</strong>
            </h1>
            <p className="font-light text-xl text-gray-500 mb-6">
              En Rainbow Clothes contamos con una gran variedad de accesorios
              femeninos de la mejor calidad y al mejor precio, no dudes en
              preguntar por nuestros exclusivos descuentos.
            </p>
            <Link
              href="/products"
              className="rounded-3xl bg-black text-white font-semibold p-3 w-max self-end hover:bg-orange-500 transition-colors"
            >
              Comprar ahora
            </Link>
          </div>

          <div className="w-full md:mb-0 md:w-[50%]">
            <img src="/images/2.jpg" alt="men-suit" className="rounded-2xl" />
          </div>
        </div>
      </section>

      {/* ----------- MONTONES DE DESCUENTOS PARA TI - SECTION ------------- */}
      <section className="relative h-[400px] mb-20 flex items-center justify-center">
        <img
          src="/images/bg3.jpg"
          alt="shoes"
          className="absolute -z-10 w-screen h-[500px] object-cover"
        />

        <div className="flex flex-col items-center gap-6 w-[500px] text-center">
          <h1 className="text-white text-xl md:text-4xl font-semibold leading-snug">
            MONTONES DE DESCUENTOS Y PRENDAS INCREIBLES {""}
            <strong className="text-orange-500">PARA TI</strong>
          </h1>
          <p className="font-light text-xl px-8 md:px-0 text-white mb-6">
            No todos los días te sientes igual, por lo que tu ropa tampoco debe
            ser la misma, ponte lo que haga que te sientas bien cada día.
          </p>
          <Link
            href="/products"
            className="rounded-3xl bg-white text-black font-semibold p-3 w-max hover:bg-orange-500 hover:text-white transition-colors"
          >
            ¿Qué esperas para comprar?
          </Link>
        </div>
      </section>

      {/* ---------------------- ÚNETE A NOSOTROS... - SECTION ------------------------- */}
      <section className="h-auto mb-10 px-5 md:px-0 md:p-10">
        <div className="flex md:flex-row flex-col">
          <div className="flex flex-col gap-5 md:w-[50%] md:mr-20">
            <h1 className="text-black text-4xl font-semibold leading-snug">
              ¡ÚNETE A NOSOTROS PARA RECIBIR ACTUALIZACIONES INSTANTÁNEAS{" "}
              <strong className="text-orange-500">
                POR CORREO ELECTRONICO!
              </strong>
            </h1>
            <p className="font-light text-xl text-gray-500 mb-6">
              Haz parte de nuestra comunidad Rainbow Clothes y conoce de
              primeras todos nuestros descuentos y nuevas prendas ¡No esperes
              más!.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="correo electronico"
                className="rounded-l-3xl px-2 md:px-5 outline-none"
              />
              <Link
                href="/"
                className="rounded-r-3xl bg-orange-500 text-white font-semibold p-4 w-max hover:bg-black transition-colors"
              >
                Únete
              </Link>
            </div>
          </div>

          <div className="w-[50%] hidden md:flex">
            <img src="/images/3.jpg" alt="men-suit" className="rounded-2xl" />
          </div>
        </div>
      </section>
    </div>
  );
}
