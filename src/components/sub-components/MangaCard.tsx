import React from "react";
import { MangaChapter } from "types/MangaChapter.types";

export const MangaCard = (props: MangaChapter) => {
  return(
    <div className="
        unrankedcard-container
        laptop:w-[150px]
        lg:w-[150px]
        xl:w-[175px]
        w-[200px]
        lg:mx-1
        xl:mx-2
        align-center row-span-2
        flex flex-col
        justify-center text-center" id="manga-img-div">
      <div className="manga-img-tilt rounded-xl align-center flex flex-col justify-center text-center" data-tilt>
        <div className="transition manga-img-div-inner align-center flex flex-row justify-center">
          <img className="rounded-xl" src={props.image} alt=""></img>
        </div>
        <div className="
                laptop:hidden
                lg:w-[150px]
                lg:h-[225px]
                xl:w-[175px]
                xl:h-[262.5px]
                w-[200px]
                h-[300px]
                flex-grow
                transform
                lg:-translate-y-0.5
                xl:-translate-y-[4px]
                flex hoverlay hoverlay-blue rounded-xl justify-center text-center">
          <div className="manga-img-text text-white lg:text-[10px] xl:text-[11px] mx-2 mb-1 self-end font-medium" id="manga-img-text">
            <p>{props.resume}</p>
          </div>
        </div>
      </div>
      <h1 className="font-extrabold mt-2 lg:text-[14px] xl:text-md text-blue-500">{props.title}</h1>
      <h2 className="font-bold lg:text-xs xl:text-sm text-white">Cap. {props.chapterNumber}</h2>
    </div>
  );
}