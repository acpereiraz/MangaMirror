const CategoryButtons = () => {
  return (
    <div className="md:scale-90 text-xs md:text-sm lg:text-base flex flex-cols flex-wrap xl:mx-40 xl:flex-nowrap md:mb-3 md:mt-[-3px] mb-6 my-1 gap-2 lg:gap-6 align-center items-center justify-center" id="category-buttons">
      <button data-tilt className="button-tilt rounded-xl px-5 xl:px-8 ring-1 ring-gray-900 h-12 bg-gradient-to-br from-sky-500 to-indigo-500 text-white font-bold uppercase text-center">Manhwa</button>
      <button data-tilt className="button-tilt rounded-xl px-5 xl:px-8 ring-1 ring-gray-900 h-12 bg-gradient-to-br from-sky-500 to-indigo-500 text-white font-bold uppercase text-center">Isekai</button>
      <button data-tilt className="button-tilt rounded-xl px-5 xl:px-8 ring-1 ring-gray-900 h-12 bg-gradient-to-br from-sky-500 to-indigo-500 text-white font-bold uppercase text-center">shonen</button>
      <button data-tilt className="button-tilt rounded-xl px-5 xl:px-8 ring-1 ring-gray-900 h-12 bg-gradient-to-br from-sky-500 to-indigo-500 text-white font-bold uppercase text-center">seinen</button>
      <button data-tilt className="button-tilt rounded-xl px-5 xl:px-8 ring-1 ring-gray-900 h-12 bg-gradient-to-br from-sky-500 to-indigo-500 text-white font-bold uppercase text-center">Comédia</button>
      <button data-tilt className="button-tilt rounded-xl px-5 xl:px-8 ring-1 ring-gray-900 h-12 bg-gradient-to-br from-sky-500 to-indigo-500 text-white font-bold uppercase text-center">Ação</button>
      <button data-tilt className="button-tilt rounded-xl px-5 xl:px-8 ring-1 ring-gray-900 h-12 bg-gradient-to-br from-sky-500 to-indigo-500 text-white font-bold uppercase text-center">Novels</button>
      <button data-tilt className="phone:hidden button-tilt rounded-xl px-5 xl:px-8 ring-1 ring-gray-900 h-12 bg-gradient-to-br from-sky-500 to-indigo-500 text-white font-bold uppercase text-center">Webtoons</button>
      <button data-tilt className="phone:hidden md-phone:hidden button-tilt rounded-xl px-5 xl:px-8 ring-1 ring-gray-900 h-12 bg-gradient-to-br from-sky-500 to-indigo-500 transition-all ease-in-out duration-500 hover:transition-all hover:bg-gradient-to-bl text-white font-bold uppercase text-center">Aventura</button>
    </div>
  )
}

export default CategoryButtons;