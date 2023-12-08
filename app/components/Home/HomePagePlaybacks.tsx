import { HeadingOne } from "./Titles";
import ShowDescription from "./ShowDescription";

const HomePagePlaybacks = () => {
  return (
    <div className="bg-[#fff5e2]">
      <div className="w-[80%] m-auto py-[5rem] ">
        <HeadingOne />
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-3">
            <ShowDescription />
            <video
              //   autoPlay
              controls
              loop
              muted
              className="w-full mx-auto rounded-lg shadow-xl"
            >
              <source
                src="https://www.incredibleindia.org/content/dam/incredible-india-v2/video/original/Incredible_india_Edit_v10_1980x786_resolution.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          {[1, 2, 3].map((v) => (
            <iframe
              key={v}
              width="100%"
              height="200"
              src="https://www.youtube-nocookie.com/embed/p8mXAQ6cPxg?si=Puq7CEa1-bPVjIOc&amp;controls=1;&amp;mute=1"
              title="YouTube video player"
              // frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="rounded-lg  shadow-xl"
            />
          ))}
          H
        </div>
      </div>
    </div>
  );
};

export default HomePagePlaybacks;
