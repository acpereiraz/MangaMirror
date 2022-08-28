import React from "react";
import "/src/styles/NavBar.css"
import "/src/styles/index.css"

const NavBar = () => {
  return(
    <div className="bg-black rounded-2xl h-14 mt-4 px-10 grid grid-cols-4 ring-1 ring-gray-900 shadow-sm text-center items-center" id="navbar">
      <h1 className="flex text-white font-bold uppercase justify-start" id="logo">
        Logo
      </h1>
      <nav className="grid grid-cols-4 col-span-2 justify-items-center justify-center gap-5 justify-self-center" id="nav-items">
        <a className="hover:text-blue-400 font-medium text-white hover:transition transition" href="home">Início</a>
        <a className="hover:text-blue-400 font-medium text-white hover:transition transition" href="home">Categorias</a>
        <a className="hover:text-blue-400 font-medium text-white hover:transition transition" href="home">Sobre</a>
        <a className="hover:text-blue-400 font-medium text-white hover:transition transition" href="home">Contato</a>
      </nav>
      <div className="flex h-7 justify-end" id="search">
        <input className="text-white px-4 invisible focus:outline-none focus:bg-blue-600 xl:visible bg-slate-900 ring-1 ring-gray-900 rounded-full shadow-inner-md" type="text" id="search" name="search"></input>
        <svg className="inner-search-icon invisible xl:visible text-white absolute transform -translate-x-7 translate-y-0.5 pointer-events-none" viewBox="0 0 24 24">
          <path fill="currentColor" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
        </svg>
        <button className="xl:invisible text-white align-center hover:text-blue-400">
          <svg className="outer-search-icon" viewBox="0 0 24 24">
            <path fill="currentColor" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default NavBar;