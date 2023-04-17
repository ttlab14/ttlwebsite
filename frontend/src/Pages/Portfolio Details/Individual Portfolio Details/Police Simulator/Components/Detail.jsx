import React from "react"

const Detail = () => {
  return (
    <div>
      <div className="mb-16">
        <h1 className="text-white text-xl md:text-2xl mb-8">
          Police Simulator{" "}
        </h1>
        <div className="w-full h-72 lg:h-96  2xl:h-100  3xl:h-110">
          <img
            className="w-full h-full object-contain"
            src="/images/Portfolio Details/PoliceSim/pcover.png"
            alt=""
          />
        </div>
        <p className="text-grey text-base md:text-lg mt-6">
          Police simulator games have gained popularity in recent years due to
          the growing interest in realistic and immersive gaming experiences.
          These games offer players a chance to experience what it's like to be
          a police officer, from responding to emergency calls to conducting
          investigations and making arrests. The rise of streaming platforms
          like Twitch and YouTube has also contributed to the popularity of
          police simulator games, as players can share their gameplay
          experiences with others and build communities around the games.
          Furthermore, the current social climate and discussions around police
          reform have made these games a subject of debate, with some
          questioning whether they reinforce or challenge traditional notions of
          law enforcement.
        </p>
      </div>
      <div className="mb-16">
        <h1 className="text-white text-xl md:text-2xl mb-8">
          Built for iPhone using Unity Engine
        </h1>
        <h1 className="text-white text-xl md:text-2xl mb-8">Results </h1>
        <div className="flex sm:flex-row flex-col gap-5 items-center">
          <img
            className="lg:w-7/12 sm:w-6/12 xs:w-9/12 h-full object-contain"
            src="/images/Portfolio Details/PoliceSim/p2.png"
            alt=""
          />
          <img
            className="lg:w-7/12 sm:w-6/12 xs:w-9/12 h-full object-contain"
            src="/images/Portfolio Details/PoliceSim/p1.png"
            alt=""
          />
        </div>

        <div className="flex sm:flex-row flex-col gap-5 items-center my-5">
          <img
            className="lg:w-7/12 sm:w-6/12 xs:w-9/12 h-full object-contain"
            src="/images/Portfolio Details/PoliceSim/p3.png"
            alt=""
          />
          <img
            className="lg:w-7/12 sm:w-6/12 xs:w-9/12 h-full object-contain"
            src="/images/Portfolio Details/PoliceSim/p4.png"
            alt=""
          />
        </div>

        <div className="flex sm:flex-row flex-col gap-5 items-center my-5">
          <img
            className="lg:w-7/12 sm:w-6/12 xs:w-9/12 h-full object-contain"
            src="/images/Portfolio Details/PoliceSim/p5.png"
            alt=""
          />
          <img
            className="lg:w-7/12 sm:w-6/12 xs:w-9/12 h-full object-contain"
            src="/images/Portfolio Details/PoliceSim/p6.png"
            alt=""
          />
        </div>

        <div className="flex sm:flex-row flex-col gap-5 items-center my-5">
          <video controls className="cursor-pointer">
            <source src="/videos/policesimvideo1.mov" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  )
}

export default Detail
