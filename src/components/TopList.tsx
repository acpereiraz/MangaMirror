const TopList = () => {
  return(
    <div className="min-h-screen rounded-2xl shadow-sm xl:mr-10 mb-10 items-center" id="side-panel">

      <h1 className="text-[#f1f1f1] text-center text-3xl font-bold antialiased uppercase mb-6 pb-2 border-b-4 border-[#f1f1f1]">Mais lidos</h1>
      <div className="flex flex-wrap justify-center gap-6" id="top-manga-list">

        <div className="manga-img-div flex flex-col rounded-2xl bg-yellow-600" id="card-star">
          <img className="rounded-t-2xl h-[300px]" src="/assets/imgs/solo-leveling-2.jpg" alt=""></img>
          <div className="flex hoverlay hoverlay-gold hoverlay-star justify-center text-center">
            <div className="manga-img-text self-end font-medium" id="manga-img-text">
              <p>Dez anos atrás, depois do "Portal" que conecta o mundo real com um mundo de montros se abriu, algumas pessoas comuns receberam o poder de caçar os monstros do portal. Eles são conhecidos como caçadores...</p>
            </div>
          </div>
          <div className="m-2 text-center text-white" id="text">
            <h1 className="font-bold">Solo Leveling</h1>
            <p>TOP #1</p>
          </div>
        </div>

        <div className="manga-img-div flex flex-col rounded-2xl bg-gray-500" id="card-star">
          <img className="rounded-t-2xl h-[300px]" src="/assets/imgs/black-clover.png" alt=""></img>
          <div className="flex hoverlay hoverlay-silver hoverlay-star justify-center text-center">
            <div className="manga-img-text self-end font-medium" id="manga-img-text">
              <p>Em um mundo em que até as tarefas mais simples do dia a dia são feitas com o uso de magia, quem não consegue usá-la é tratado como nada! Esta é a vida de Asta...</p>
            </div>
          </div>
          <div className="m-2 text-center text-white" id="text">
            <h1 className="font-bold">Black Clover</h1>
            <p>TOP #2</p>
          </div>
        </div>
        
        <div className="manga-img-div flex flex-col rounded-2xl bg-amber-900" id="card-star">
          <img className="rounded-t-2xl h-[300px]" src="/assets/imgs/one-piece.jpg" alt=""></img>
          <div className="flex hoverlay hoverlay-bronze hoverlay-star justify-center text-center">
            <div className="manga-img-text self-end font-medium" id="manga-img-text">
              <p>One Piece começa quando Gol D. Roger, o Rei Dos Piratas que possuiu tudo nesse mundo, antes de ser executado, diz que escondeu o seu tesouro em algum lugar da Grand Line, um oceano extremamente perigoso...</p>
            </div>
          </div>
          <div className="m-2 text-center text-white" id="text">
            <h1 className="font-bold">One Piece</h1>
            <p>TOP #3</p>
          </div>
        </div>

        <div className="manga-img-div flex flex-col rounded-2xl bg-blue-900" id="card-star">
          <img className="rounded-t-2xl h-[300px]" src="/assets/imgs/chainsaw-man.jpg" alt=""></img>
          <div className="flex hoverlay hoverlay-dark-blue hoverlay-star justify-center text-center">
            <div className="manga-img-text self-end font-medium" id="manga-img-text">
              <p>Quando seu pai morreu, Denji ficou preso com uma dívida que era incapaz de pagar. Mas graças à ajuda de um cachorro demônio que ele salvou chamado Pochita, Denji é capaz de sobreviver como caçador de demônios de aluguel...</p>
            </div>
          </div>
          <div className="m-2 text-center text-white" id="text">
            <h1 className="font-bold">Chainsaw Man</h1>
            <p>TOP #4</p>
          </div>
        </div>

        <div className="manga-img-div flex flex-col rounded-2xl bg-blue-900" id="card-star">
          <img className="rounded-t-2xl h-[300px]" src="/assets/imgs/one-punch-man.png" alt=""></img>
          <div className="flex hoverlay hoverlay-dark-blue hoverlay-star justify-center text-center">
            <div className="manga-img-text self-end font-medium" id="manga-img-text">
              <p>Conta o dia-a-dia de um herói normal que está infeliz por ser forte o bastante para derrotar todos os seus oponentes com apenas um soco, já que isso não lhe traz mais a sensação de adrenalina ao enfrentar um inimigo poderoso...</p>
            </div>
          </div>
          <div className="m-2 text-center text-white" id="text">
            <h1 className="font-bold">One Punch Man</h1>
            <p>TOP #5</p>
          </div>
        </div>

        <div className="manga-img-div flex flex-col rounded-2xl bg-blue-900" id="card-star">
          <img className="rounded-t-2xl h-[300px]" src="/assets/imgs/boku-no-hero.png" alt=""></img>
          <div className="flex hoverlay hoverlay-dark-blue hoverlay-star justify-center text-center">
            <div className="manga-img-text self-end font-medium" id="manga-img-text">
              <p>A série conta a história de Midoriya Izuku, um garoto tímido e fraco cujo sonho é ser um herói. O problema é que ele vive num mundo repleto de pessoas com super poderes, mas ele mesmo não tem poder algum...</p>
            </div>
          </div>
          <div className="m-2 text-center text-white" id="text">
            <h1 className="font-bold">Boku No Hero</h1>
            <p>TOP #6</p>
          </div>
        </div>

      </div>

      <h1 className="text-[#f1f1f1] text-center text-3xl font-bold antialiased uppercase mb-10 pb-2 border-b-4 border-[#f1f1f1] mt-6">Rank Scans</h1>
      <div className="flex flex-col justify-center gap-4" id="top-scan-list">
        <div className="grid grid-cols-3 grid-rows-2 rounded-xl" id="top-scan-item">
          <img src="/assets/imgs/black-clover.png" className="row-span-2 rounded-l-xl rounded-b-xl h-[280px]" alt=""></img>

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

export default TopList;