import { Link } from "react-router-dom";
import { MangaChapter } from "types/MangaChapter.types";
import "../../styles/MangaCard.css";

export const MangaCard = (props: MangaChapter) => {

  return(
    <div className="manga-img-div flex flex-col items-center">

      <div id="manga-card" className="text-white w-full sm:w-[300px] h-[125px] rounded-xl overflow-hidden
                      md:w-[200px] md:h-[300px]">

        <Link className="flex justify-start h-full w-full gap-2 bg-blue-600 bg-opacity-80 md:relative" data-tilt to={"m/1"}>

            <img className="h-full w-[150px] md:w-full" src={props.image} alt=""></img>
            <div className="hoverlay hoverlay-blue h-full flex flex-col text-ellipsis p-1 overflow-hidden md:absolute md:w-full md:justify-end md:p-3 md:text-center">
              <span className="flex gap-2 md:hidden"><h1 className="font-semibold">{props.title}</h1> <span>-</span> <h2>{props.chapterNumber}</h2></span>
              <p className="text-[12px] h-full md:h-fit overflow-hidden">{props.resume}</p>
            </div>

        </Link>
      </div>

      <div className="phone:hidden flex flex-col items-center">
        <h1 className="font-extrabold lg:text-[14px] xl:text-md text-blue-500">{props.title}</h1>
        <h2 className="font-bold lg:text-xs xl:text-sm text-white">Cap. {props.chapterNumber}</h2>
      </div>
    </div>
  );
}