import { MangaChapter, UnrankedCard} from "./sub-components/UnrankedCard";

type CardSectionProps = {
  title: string;
  callback: () => MangaChapter[];
}


const CardSection = (props: CardSectionProps) => {
  const mangas:MangaChapter[] = props.callback();
  return(
    <div className="rounded-2xl shadow-sm" id="recent-updated">
      <div className="flex h-14 rounded-t-2xl">
        <h1 className="lg:mx-10 self-center font-bold text-xl text-white border-b-4 laptop:pr-32 pr-52">{props.title}</h1>
      </div>

      <div className="flex flex-wrap justify-around ring-1 ring-gray-900 rounded-2xl mx-8 p-6 gap-y-5" id="">

        {mangas.map(manga => {
          const key = Math.random()
          return <UnrankedCard title={manga.title} chapterNumber={manga.chapterNumber} image={manga.image} resume={manga.resume} key={key} />
        })}

      </div>
    </div>
  );
}

export default CardSection;