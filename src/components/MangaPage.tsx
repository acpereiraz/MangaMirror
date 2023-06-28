import { Link, useParams } from 'react-router-dom';
import 'styles/ModalBox.css';
import { Manga } from "types/Manga";

const MangaPage = () => {

  const getManga = (id:any): Manga => {
    return {
      id: 1,
      name: "Black Clover",
      image: "/assets/imgs/black-clover.png",
      resume: "Em um mundo em que até as tarefas mais simples do dia a dia são feitas com o uso de magia, quem não consegue usá-la é tratado como nada! Esta é a vida de Asta...",
      author: "Yuki Tabata"
    }
  }
  
  const id = useParams();
  const manga = getManga(id)
  return (
    <div className="z-20">
      <Link className='fixed inset-0 bg-black backdrop-blur-[4px] bg-opacity-75 z-10 transition-opacity cursor-default' to={'/MangaMirror-web/'}>
      </Link>
      <div className="modal-bg fixed inset-0 
                      lg:mx-20 lg:my-12 lg:rounded-2xl
                      xl:mx-32 xl:my-20 xl:rounded-3xl
                      p-12 z-10 opacity-80 rounded-3xl text-white">
      </div>

      <div className="fixed inset-0 z-10 backdrop-blur-3xl opacity-[85%] text-white bg-black 
                    lg:mx-20 lg:my-12 lg:rounded-2xl lg:px-18 lg:py-12
                    xl:mx-32 xl:my-20 xl:rounded-3xl xl:px-[4em] xl:py-14
                    p-10 px-14 ring-1 ring-gray-900 shadow-lg"
        >

          <div className='flex flex-x-grow'>
            <img className='xl:h-[400px] lg:h-[320px] md:h-[280px] h-[250px] rounded-xl row-span-2' src={manga.image} />
            <h1 className='text-[#f1f1f1] text-center text-3xl font-bold antialiased uppercase  border-b-4 border-[#f1f1f1] h-10 flex-grow lg:mx-[20%] ml-[10%] '>{manga.name}</h1>
          </div>

          <div className='flex'>

          </div>

      </div>
    </div>

  );
}

export default MangaPage;