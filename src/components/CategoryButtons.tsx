const CategoryButtons = () => {
  return (
    <div className="flex h-16 relative">
      <div className="bg-gradient-to-r from-[#00000f] to-transparent h-full w-24 absolute pointer-events-none"></div>
      <div className="text-xs md:text-sm lg:text-base flex flex-nowrap justify-center overflow-auto md:overflow-hidden xl:flex-nowrap gap-2 lg:gap-6 p-2 w-full" id="category-buttons">
        <button data-tilt className="button-tilt rounded-xl px-5 xl:px-8 ring-1 ring-gray-900 h-12 bg-gradient-to-br from-sky-500 to-indigo-500 text-white font-bold uppercase text-center">Manhwa</button>
        <button data-tilt className="button-tilt rounded-xl px-5 xl:px-8 ring-1 ring-gray-900 h-12 bg-gradient-to-br from-sky-500 to-indigo-500 text-white font-bold uppercase text-center">Isekai</button>
        <button data-tilt className="button-tilt rounded-xl px-5 xl:px-8 ring-1 ring-gray-900 h-12 bg-gradient-to-br from-sky-500 to-indigo-500 text-white font-bold uppercase text-center">shonen</button>
        <button data-tilt className="button-tilt rounded-xl px-5 xl:px-8 ring-1 ring-gray-900 h-12 bg-gradient-to-br from-sky-500 to-indigo-500 text-white font-bold uppercase text-center">seinen</button>
        <button data-tilt className="button-tilt rounded-xl px-5 xl:px-8 ring-1 ring-gray-900 h-12 bg-gradient-to-br from-sky-500 to-indigo-500 text-white font-bold uppercase text-center">Comédia</button>
        <button data-tilt className="button-tilt rounded-xl px-5 xl:px-8 ring-1 ring-gray-900 h-12 bg-gradient-to-br from-sky-500 to-indigo-500 text-white font-bold uppercase text-center">Ação</button>
        <button data-tilt className="button-tilt rounded-xl px-5 xl:px-8 ring-1 ring-gray-900 h-12 bg-gradient-to-br from-sky-500 to-indigo-500 text-white font-bold uppercase text-center">Novels</button>
        <button data-tilt className="button-tilt rounded-xl px-5 xl:px-8 ring-1 ring-gray-900 h-12 bg-gradient-to-br from-sky-500 to-indigo-500 text-white font-bold uppercase text-center">Webtoons</button>
        <button className="rounded-xl px-5 xl:px-8 ring-1 ring-gray-900 h-12 bg-gradient-to-br from-sky-500 to-indigo-500 text-white font-bold uppercase text-center">Aventura</button>
      </div>
      <div className="bg-gradient-to-l from-[#00000f] to-transparent h-full w-24 absolute pointer-events-none right-0"></div>
    </div>

  )
}

export default CategoryButtons;