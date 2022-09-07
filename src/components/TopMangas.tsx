import { RankColor } from "interfaces/TopMangas.RankColor.interfaces";
import { Link } from "react-router-dom";
import { MangaChapter } from "types/MangaChapter.types";

type TopListProps = {
  callback: () => MangaChapter[];
}

const TopList = (props: TopListProps) => {
  const MangasList:MangaChapter[] = props.callback();
  return(
    <div>
      <h1 className="text-[#f1f1f1] text-center text-3xl font-bold antialiased uppercase mb-6 pb-2 border-b-4 border-[#f1f1f1]">Mais lidos</h1>
      <div className="flex flex-wrap justify-center gap-6" id="top-manga-list">
        {MangasList.map(manga => {
          let color:RankColor;
          switch (manga.rank) {
            case 1: 
              color = {
                code: "bg-yellow-600",
                name: "gold"
              };
              break;
            case 2: 
              color = {
                code: "bg-gray-500",
                name: "silver"
              };
              break;
            case 3: 
              color = {
                code: "bg-amber-900",
                name: "bronze"
              };
              break;
            default:
              color = {
                code: "bg-blue-900",
                name: "dark-blue"
              }
          }
          return(
            <Link className={`manga-img-div flex flex-col rounded-2xl ${color.code}`} id="card-star" key={Math.random()} to={"m/1"}>
              <img className="rounded-t-2xl h-[300px]" src={manga.image} alt=""></img>
              <div className={`flex hoverlay hoverlay-${color.name} hoverlay-star justify-center text-center`}>
                <div className="manga-img-text self-end font-medium" id="manga-img-text">
                  <p>{manga.resume}</p>
                </div>
              </div>
              <div className="m-2 text-center text-white" id="text">
                <h1 className="font-bold">{manga.title}</h1>
                <p>TOP #{manga.rank}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default TopList;