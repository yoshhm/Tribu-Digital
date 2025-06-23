'use client'; {/* Esto le dice a Next.js que este componente se debe renderizar en el cliente, no en el servidor. Es necesario porque usamos useState*/}

import { useState } from 'react'; {/*proporciona una forma de que los componentes funcionales «recuerden» los datos y vuelvan a renderizarlos cuando esos datos cambien.*/}
import Image from 'next/image';
import { Menu, X } from 'lucide-react'; // importa los iconos del menu
import Link from "next/link"; 


export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false); // Crea un estado que controla si el menú está abierto (true) o cerrado (false).

  return (
    <main className="bg-[#070a10] min-h-screen text-white">
      {/* Header */}
      <header className="flex flex-col md:flex-row justify-between items-center px-6 py-3 gap-4 bg-[#111827] px-4 py-3 rounded-lg">
        
        {/* Logo */}
        <Link href="/"> {/*hace referencia al inicio al darle click*/}
          <div className="flex items-center gap-2 text-2xl font-bold text-white-400">
          Trïbū Digital
          <Image src="/logo_tribu.png" alt="Logo Tribu Digital" width={30} height={30} />
          </div>
        </Link>

        {/* Botón hamburguesa (solo en móvil) */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menú de navegación */}
        <nav
          className={`${menuOpen ? 'flex' : 'hidden'
          } flex-col md:flex md:flex-row items-center justify center gap-3 md:gap-6 text-sm md:text-base`}
        >
          <a href="/">Inicio</a>
          <a href="#">Servicios</a>
          <a href="#">Nosotros</a>
          <a href="#">Portafolio</a>
          <a href="#">Testimonios</a>
          <a href="#">Blog</a>
          <a href="#" className="px-4 py-2 bg-orange-900 text-white font-semibold rounded-full hover:bg-orange-700 transition duration-300" // Botón de contacto con estilo personalizado
          >
            Contacto
          </a>
        </nav>
      </header>

      {/* Sección principal */}
      <section className="flex flex-col lg:flex-row items-center justify-center gap-10 px-6 py-50 max-w-7xl mx-auto">
        <div className="max-w-xl text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl font-semibold text-emerald-600 mb-2">
            <span className="flex items-center gap-2">
              Tribü Digital
              <Image src="/logo_tribu.png" alt="Logo Tribu Digital" width={40} height={40} />
            </span>
          </h2>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold">
            Marcas Auténticas, Tribus Poderosas
          </h2>
          <p className="mt-4 text-lg sm:text-xl lg:text-2xl font-light text-gray-300">
            Impulsamos tu marca a nuevas alturas en el mundo digital.
          </p>
          <a
            href="#"
            className="bg-[#7c2d12] px-8 py-3 font-semibold rounded-full inline-block text-lg md:text-white mt-10"
          >
            Descubre Nuestros Servicios
          </a>
        </div>

        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
          <Image
            src="/celular.png" alt="Celular" width={800} height={600}
            className="rounded-xl w-full h-auto"
          />
        </div>
      </section>
    </main>
  );
}
