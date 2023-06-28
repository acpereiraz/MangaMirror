import Carousel from "../components/Carousel";
import CategoryButtons from "../components/CategoryButtons";
import NavBar from "../components/NavBar";
import TopList from "../components/TopMangas";
import CardSection from "../components/CardSection";
import { MangaChapter } from "types/MangaChapter.types";
import TopScans from "components/TopScans";
import { Manga } from "types/Manga";
import { Outlet } from "react-router-dom";

export default function Home() {

  const getRecentlyUpdated = (): MangaChapter[] => {
    return [
      {
        title: "Chainsaw Man",
        chapterNumber: 102,
        image: "assets/imgs/chainsaw-man.jpg",
        resume: "Quando seu pai morreu, Denji ficou preso com uma dívida que era incapaz de pagar. Mas graças à ajuda de um cachorro demônio que ele salvou chamado Pochita, Denji é capaz de sobreviver como caçador de demônios de aluguel..."
      },
      
      {
        title: "Black Clover",
        chapterNumber: 334,
        image: "assets/imgs/black-clover.png",
        resume: "Em um mundo em que até as tarefas mais simples do dia a dia são feitas com o uso de magia, quem não consegue usá-la é tratado como nada! Esta é a vida de Asta..."
      },
      {
        title: "Black Clover",
        chapterNumber: 334,
        image: "assets/imgs/black-clover.png",
        resume: "Em um mundo em que até as tarefas mais simples do dia a dia são feitas com o uso de magia, quem não consegue usá-la é tratado como nada! Esta é a vida de Asta..."
      },
      {
        title: "Black Clover",
        chapterNumber: 334,
        image: "assets/imgs/black-clover.png",
        resume: "Em um mundo em que até as tarefas mais simples do dia a dia são feitas com o uso de magia, quem não consegue usá-la é tratado como nada! Esta é a vida de Asta..."
      },
      {
        title: "Black Clover",
        chapterNumber: 334,
        image: "assets/imgs/black-clover.png",
        resume: "Em um mundo em que até as tarefas mais simples do dia a dia são feitas com o uso de magia, quem não consegue usá-la é tratado como nada! Esta é a vida de Asta..."
      },
      {
        title: "Black Clover",
        chapterNumber: 334,
        image: "assets/imgs/black-clover.png",
        resume: "Em um mundo em que até as tarefas mais simples do dia a dia são feitas com o uso de magia, quem não consegue usá-la é tratado como nada! Esta é a vida de Asta..."
      },
    ]
  }

  const getTopMangas = (): MangaChapter[] => {
    return [
      {
        title: "Solo Leveling",
        chapterNumber: 0,
        image: "assets/imgs/solo-leveling-2.jpg",
        resume: 'Dez anos atrás, depois do "Portal" que conecta o mundo real com um mundo de montros se abriu, algumas pessoas comuns receberam o poder de caçar os monstros do portal. Eles são conhecidos como caçadores...',
        rank: 1
      },
      {
        title: "Black Clover",
        chapterNumber: 0,
        image: "assets/imgs/black-clover.png",
        resume: "Em um mundo em que até as tarefas mais simples do dia a dia são feitas com o uso de magia, quem não consegue usá-la é tratado como nada! Esta é a vida de Asta...",
        rank: 2
      },
      {
        title: "One Piece",
        chapterNumber: 0,
        image: "assets/imgs/one-piece.jpg",
        resume: "One Piece começa quando Gol D. Roger, o Rei Dos Piratas que possuiu tudo nesse mundo, antes de ser executado, diz que escondeu o seu tesouro em algum lugar da Grand Line, um oceano extremamente perigoso...",
        rank: 3
      },
      {
        title: "Chainsaw Man",
        chapterNumber: 0,
        image: "assets/imgs/chainsaw-man.jpg",
        resume: "Quando seu pai morreu, Denji ficou preso com uma dívida que era incapaz de pagar. Mas graças à ajuda de um cachorro demônio que ele salvou chamado Pochita, Denji é capaz de sobreviver como caçador de demônios de aluguel...",
        rank: 4
      },
      {
        title: "One Punch Man",
        chapterNumber: 0,
        image: "assets/imgs/one-punch-man.png",
        resume: "Conta o dia-a-dia de um herói normal que está infeliz por ser forte o bastante para derrotar todos os seus oponentes com apenas um soco, já que isso não lhe traz mais a sensação de adrenalina ao enfrentar um inimigo poderoso...",
        rank: 5
      },
      {
        title: "Boku No Hero",
        chapterNumber: 0,
        image: "assets/imgs/boku-no-hero.png",
        resume: "A série conta a história de Midoriya Izuku, um garoto tímido e fraco cujo sonho é ser um herói. O problema é que ele vive num mundo repleto de pessoas com super poderes, mas ele mesmo não tem poder algum...",
        rank: 6
      }
    ]
  }

  const getNewlyAdded = (): MangaChapter[] => {
    return [
      {
        title: "Black Clover",
        chapterNumber: 334,
        image: "assets/imgs/black-clover.png",
        resume: "Em um mundo em que até as tarefas mais simples do dia a dia são feitas com o uso de magia, quem não consegue usá-la é tratado como nada! Esta é a vida de Asta...",
      },
      
    ]
  };

  return (
    <div className="bg-[#00000f]">
      <div className="bg-[#00000f] min-h-screen flex flex-col mx-2 lg:mx-4 xl:mx-8 gap-4">

        <div className="h-2/3 w-screen absolute z-0 left-0 pointer-events-none">
          <div className="relative w-full h-full">
            <img src="assets/imgs/bg.png" className="w-full h-full z-30 opacity-30"></img>
            <div className="w-full h-2/3 z-20 absolute bottom-0 bg-gradient-to-t from-[#00000f] to-transparent"></div>
          </div>
        </div>

        <NavBar />
        <Carousel />
        <CategoryButtons />
        <Outlet />
        <div className="md:grid md:grid-cols-3 gap-2 md:gap-4 lg:gap-6 xl:gap-8 z-10" id="entire-body">
          <div className="flex flex-col col-span-2 gap-2 md:gap-4 lg:gap-5 mb-4 md:mb-0" id="main">
            <CardSection pageTitle="Atualizados Recentemente" callback={getRecentlyUpdated} />
            <CardSection pageTitle="Novos Adicionados" callback={getNewlyAdded}/>
          </div>
          <div className="rounded-2xl shadow-sm xl:mr-10 mb-10 items-center" id="side-panel">
            <TopList callback={getTopMangas}/>
            {/* <TopScans /> */}
          </div>
        </div>
      </div>
    </div>
  );
}