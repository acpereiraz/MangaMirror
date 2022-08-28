import "styles/Carousel.css";

const Carousel = () => {

  return (

    <div className="rounded-2xl md:scale-75 md:my-[-60px] sm:scale-75 shadow-sm flex justify-center flex-grow" id="top-slide">
        <div className="carousel">
          <a className="carousel-item"><img src="/assets/imgs/solo-leveling-2.jpg"></img></a>
          <a className="carousel-item"><img src="/assets/imgs/black-clover.png"></img></a>
          <a className="carousel-item"><img src="/assets/imgs/chainsaw-man.jpg"></img></a>
          <a className="carousel-item"><img src="/assets/imgs/one-punch-man.png"></img></a>
          <a className="carousel-item"><img src="/assets/imgs/boku-no-hero.png"></img></a>
          <a className="carousel-item"><img src="/assets/imgs/tbate.jpg"></img></a>
          <a className="carousel-item"><img src="/assets/imgs/one-piece.jpg"></img></a>
        </div>
    </div>
  );
};

export default Carousel;