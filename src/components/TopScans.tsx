const TopScans = () => {
  return (
    <div>
      <h1 className="text-[#f1f1f1] text-center text-3xl font-bold antialiased uppercase mb-10 pb-2 border-b-4 border-[#f1f1f1] mt-6">Rank Scans</h1>
      <div className="flex flex-col justify-center gap-4" id="top-scan-list">
        <div className="grid grid-cols-3 grid-rows-2 rounded-xl" id="top-scan-item">
          <img src="assets/imgs/black-clover.png" className="row-span-2 rounded-l-xl rounded-b-xl h-[280px]" alt=""></img>

          <div className="flex flex-col col-span-2 row-span-2">
            <div className="bg-blue-800 h-12 rounded-r-xl text-center align-center items-center">
              <h1 className="m-2 self-center text-white font-bold text-lg">Random Scans</h1>
            </div>
            <div className="flex absolute transform -translate-x-56 -translate-y-5 rounded-full bg-yellow-600 h-[80px] w-[80px] text-center justify-center align-center items-center text-white font-extrabold shadow-sm text-4xl">
              #1
            </div>
            <div className="flex flex-grow">
            </div>
          </div>

        </div>
      </div>
    </div>

  );
}

export default TopScans;