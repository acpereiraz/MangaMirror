import { Link } from "react-router-dom";
import { MangaChapter } from "types/MangaChapter.types";
import "../../styles/MangaCard.css";

export const MangaCard = (props: MangaChapter) => {

  return(
    <div className="manga-img-div flex flex-col items-center gap-2">

      <div id="manga-card" className="text-white w-full sm:w-[300px] h-[125px] rounded-xl overflow-hidden
                      md:w-[150px] md:h-[220px] md:h-60 xl:w-[180px] xl:h-[260px] relative">

        <Link className="flex justify-start h-full w-full gap-2 bg-blue-600 bg-opacity-80 md:relative" data-tilt to={"m/1"}>

            <img className="h-full w-[150px] md:w-full" src={props.image} alt=""></img>
            <div className="hoverlay hoverlay-blue h-full w-full flex flex-col text-ellipsis p-3 overflow-hidden md:absolute md:justify-end md:p-3 md:text-center">
              <span className="flex gap-2 md:hidden justify-center"><h1 className="font-semibold">{props.title}</h1></span>
              <p className="flex flex-col md:justify-end text-[10px] h-full w-full text-center overflow-hidden">{props.resume}</p>
            </div>

        </Link>

        <div className="absolute top-0 right-0 md:bg-blue-600 bg-white px-2 py-1 rounded-bl-lg pointer-events-none">
          <h2 className=" font-bold text-sm lg:text-sm text-blue-500 md:text-white"><span className="phone:hidden">Cap. </span>{props.chapterNumber}</h2>
        </div>

      </div>

      <div className="phone:hidden flex gap-2 items-center">
        <h1 className="font-bold lg:text-[14px] xl:text-md text-white">{props.title}</h1>
      </div>
      
    </div>
  );
}