import "styles/NavBar.css";
import "styles/index.css";
import { BiSearch, BiMenu } from "react-icons/bi";

const NavBar = () => {
  return(
    <div className="h-14 z-10 mt-3 px-8 flex text-center items-center justify-between" id="navbar">

      <div className="md:hidden cursor-pointer">
        <BiMenu className="text-white text-[24px]" />
      </div>

      <h1 className="flex text-white font-bold uppercase justify-start text-center phone:justify-center text-xl phone:grow" id="logo">
        Logo
      </h1>

      <div className="flex gap-10">
        <nav className="flex justify-center gap-5 font-semibold phone:hidden" id="nav-items">
          <a className="hover:text-blue-400 font-medium text-white hover:transition transition" href="home">Categorias</a>
          <a className="hover:text-blue-400 font-medium text-white hover:transition transition" href="home">Sobre</a>
          <a className="hover:text-blue-400 font-medium text-white hover:transition transition" href="home">Log in</a>
        </nav>

        <div className="flex h-7 justify-end items-center" id="search">
          <input className="text-white px-4 py-1 phone:hidden focus:outline-none focus:bg-blue-600 bg-slate-800 ring-1 ring-gray-900 rounded-full shadow-inner-md" type="text" id="search" name="search" placeholder="Buscar manga..."></input>
          <BiSearch className="text-white text-[24px] md:text-[20px] md:-translate-x-6" />
        </div>
        
      </div>

    </div>
  );
}

export default NavBar;