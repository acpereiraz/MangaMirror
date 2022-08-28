import React from "react";
import Carousel from "../components/Carousel";
import CategoryButtons from "../components/CategoryButtons";
import NavBar from "../components/NavBar";
import NewAdded from "../components/NewAdded";
import RecentUpdated from "../components/CardSection";
import TopList from "../components/TopList";
import CardSection from "../components/CardSection";
import { MangaChapter } from "../components/sub-components/UnrankedCard";

export default function Home() {

  const getRecentMangas = (): MangaChapter[] => {
    return [
      {
        title: "Chainsaw Man",
        chapterNumber: 102,
        image: "/assets/imgs/chainsaw-man.jpg",
        resume: "Quando seu pai morreu, Denji ficou preso com uma dívida que era incapaz de pagar. Mas graças à ajuda de um cachorro demônio que ele salvou chamado Pochita, Denji é capaz de sobreviver como caçador de demônios de aluguel..."
      },
      {
        title: "Black Clover",
        chapterNumber: 334,
        image: "/assets/imgs/black-clover.png",
        resume: "Em um mundo em que até as tarefas mais simples do dia a dia são feitas com o uso de magia, quem não consegue usá-la é tratado como nada! Esta é a vida de Asta..."
      },
      {
        title: "Black Clover",
        chapterNumber: 334,
        image: "/assets/imgs/black-clover.png",
        resume: "Em um mundo em que até as tarefas mais simples do dia a dia são feitas com o uso de magia, quem não consegue usá-la é tratado como nada! Esta é a vida de Asta..."
      },
      {
        title: "Black Clover",
        chapterNumber: 334,
        image: "/assets/imgs/black-clover.png",
        resume: "Em um mundo em que até as tarefas mais simples do dia a dia são feitas com o uso de magia, quem não consegue usá-la é tratado como nada! Esta é a vida de Asta..."
      },
      {
        title: "Black Clover",
        chapterNumber: 334,
        image: "/assets/imgs/black-clover.png",
        resume: "Em um mundo em que até as tarefas mais simples do dia a dia são feitas com o uso de magia, quem não consegue usá-la é tratado como nada! Esta é a vida de Asta..."
      },
      {
        title: "Black Clover",
        chapterNumber: 334,
        image: "/assets/imgs/black-clover.png",
        resume: "Em um mundo em que até as tarefas mais simples do dia a dia são feitas com o uso de magia, quem não consegue usá-la é tratado como nada! Esta é a vida de Asta..."
      },
    ]
  }

  return (
    <div className="bg-[#00000f] md:mx-4">
      <div className="bg-[#00000f] min-h-screen flex flex-col mx-8 gap-4">
        <NavBar />
        <Carousel />
        <CategoryButtons />
        <div className="grid grid-cols-3 gap-2 md:gap-4 lg:gap-10" id="entire-body">
          <div className="flex flex-col col-span-2 gap-2 md:gap-4 lg:gap-5 min-h-screen" id="main">
            <CardSection title="Adicionados Recentemente" callback={getRecentMangas} />
          </div>
          <TopList />
        </div>
      </div>

    </div>
  );
}