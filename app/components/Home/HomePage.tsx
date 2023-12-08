import NavBar from "../NavBar/NavBar";

import TopContent from "./TopContent";
import Territories from "./Destinations";
import HomePagePlaybacks from "./HomePagePlaybacks";

import ExploreLink from "./ExploreLink";

const HomePage = () => {
  return (
    <div>
      <div className="bg-[url(https://images.pexels.com/photos/2314983/pexels-photo-2314983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)] bg-cover bg-bottom relative">
        <video
          autoPlay
          // controls
          // loop
          muted
          className="absolute top-0 bottom-0 w-full h-full mx-auto rounded-lg"
        >
          <source
            src="https://www.incredibleindia.org/content/dam/incredible-india-v2/video/original/Incredible_india_Edit_v10_1980x786_resolution.mp4"
            type="video/mp4"
          />
        </video>

        <div className="backdrop-brightness-[70%] z-10">
          <NavBar />
          <div className="grid grid-cols-2 lg:max-w-[1280px] lg:h-[31.8rem] m-auto text-white">
            <section className="pt-[5rem]">
              <p className="text-[4rem] font-bold leading-[4.5rem]">
                Travel memories you&apos;ll never forget
              </p>
              <ExploreLink />
            </section>
          </div>
        </div>
      </div>

      <HomePagePlaybacks />
      <Territories />
      <TopContent />
    </div>
  );
};

export default HomePage;
