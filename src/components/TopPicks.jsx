import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { topPicks } from "../data/data";

export const TopPicks = () => {
  return (
    <>
      <h1 className="text-orange-500 font-bold text-2xl text-center pt-12">
        Top Picks
      </h1>
      <div className="hidden lg:flex max-w[1520px] m-auto py-2 px- 2">
        <Splide options={{ perPage: 4, drag: "free", arrows: false }}>
          {topPicks.map((item) => {
            return (
              <SplideSlide key={item.id}>
                <div className="rounded-3xl relative mx-2">
                  <div className="absolute w-full h-full bg-black/50 rounded-3xl text-white">
                    <p className="px-2 font-bold text-2xl pt-4">{item.title}</p>
                    <p className="px-2 ">{item.price}</p>
                    <button className="border-solid border-white text-white mx-2 absolute bottom-4 hover:bg-white hover:text-black duration-500">
                      Add to Cart
                    </button>
                  </div>
                  <img
                    className="h-[200px] w-full object-cover rounded-3xl cursor-pointer hover:scale-105 ease-out duration 300"
                    src={item.img}
                    alt={item.title}
                  />
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </>
  );
};
