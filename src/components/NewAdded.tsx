const NewAdded = () => {
  return(
    <div className="rounded-2xl shadow-sm xl:ml-10" id="new-added">
      <div className="flex h-14 rounded-t-2xl ">
        <h1 className="mx-10 self-center font-bold text-xl text-[#f1f1f1] border-b-4 pr-52">Novos Adicionados</h1>
      </div>

      <div className="grid grid-cols-4 grid-flow-row auto-rows-max ring-1 ring-gray-900 rounded-2xl mx-6" id="box">
        <div className="manga-img-div m-10 align-center row-span-2 flex flex-col justify-center text-center" id="manga-img-div">
          <div className="transition manga-img-div-inner align-center flex flex-row justify-center">
            <img className="rounded-xl" src="assets/imgs/black-clover.png" alt=""></img>
          </div>
          <div className="flex hoverlay hoverlay-blue rounded-xl">
            <div className="manga-img-text self-end font-medium" id="manga-img-text">
              <p>Em um mundo em que até as tarefas mais simples do dia a dia são feitas com o uso de magia, quem não consegue usá-la é tratado como nada! Esta é a vida de Asta...</p>
            </div>
          </div>
          <h1 className="font-extrabold mt-2 text-sm text-blue-500">Black Clover</h1>
          <h2 className="font-medium text-xs text-white">Cap. 334</h2>
        </div>

      </div>

    </div>
  );
}

export default NewAdded;