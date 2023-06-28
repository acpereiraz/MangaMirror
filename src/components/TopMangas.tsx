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
      <div className="flex w-full justify-center text-center items-center">
        <h1 className="text-[#f1f1f1] w-2/3 text-xl font-bold subpixel-antialiased uppercase mb-6 pb-2 border-b-4 border-[#f1f1f1]">Mais lidos</h1>
      </div>
      <div className="flex flex-wrap justify-center gap-4" id="top-manga-list">

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
            <Link className={`manga-img-div flex flex-col rounded-xl overflow-hidden  ${color.code}`} id="card-star" key={Math.random()} to={"m/1"}>

                <div id="manga-card" className="text-white w-full w-[350px] h-[125px] overflow-hidden">

                  <div className="flex justify-start h-full w-full gap-2 bg-opacity-80">
                      <img className="h-full w-[150px]" src={manga.image} alt=""></img>
                      <div className="h-full flex flex-col text-ellipsis p-2 overflow-hidden">
                        <span className="flex gap-2"><h1 className="font-semibold">{manga.title}</h1> <span>-</span> <h2>#{manga.rank}</h2></span>
                        <p className="text-[10.5px] h-full text-ellipsis pb-2 overflow-hidden">{manga.resume}</p>
                      </div>
                  </div>

                </div>

            </Link>
          );
        })}

      </div>
    </div>
  );
}

export default TopList;