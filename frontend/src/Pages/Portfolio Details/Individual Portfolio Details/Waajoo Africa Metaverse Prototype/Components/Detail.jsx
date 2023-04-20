import React from "react"

const Detail = () => {
  return (
    <div>
      <div className="mb-16">
        <h1 className="text-white text-xl md:text-2xl mb-8">Waajoo Africa</h1>
        <div className="w-full sm:h-72 lg:h-96  2xl:h-100  3xl:h-110">
          <img
            className="w-full h-full object-contain"
            src="/images/PortfolioDetails/Waajoo/waajoo.png"
            alt=""
          />
        </div>
        <p className="text-grey text-base md:text-lg mt-6">
          Waajoo Africa is a digital platform, including a website, mobile app,
          and OTT channels, that highlights the skills of African individuals on
          a worldwide stage. The showcased talents are from a variety of
          artistic fields, such as literature, performance, visual art, and
          gospel. Waajoo Africa is dedicated to supporting individuals who view
          showcasing their abilities as a pastime, part-time endeavor, or
          potential business venture by assisting them in transitioning into
          entrepreneurs. (from <a href="https://www.waajoo.app/">here</a>)
        </p>
        <p className="text-grey text-base md:text-lg mt-6">
          A user is guided through a signup process which includes agreeing to
          terms and conditions such as on Wajoo's mobile app. After which the
          user can teleport around the main lobby. There is a NPC (Non Player
          Character) which roams the main lobby and upon encountering the user
          initiates a dialogue.
        </p>
        <p className="text-grey text-base md:text-lg mt-6">
          The user can also opt to go to the exhibition room which has a large
          screen featuring a couple of artists and their music
        </p>
      </div>
      <div className="mb-16">
        <h1 className="text-white text-xl md:text-2xl mb-8">
          Built for Meta Quest 1 & 2 using Unity Engine
        </h1>
        <h1 className="text-white text-xl md:text-2xl mb-8">Results </h1>
        <div className="flex sm:flex-row flex-col gap-5 items-center">
          <img
            className="lg:w-7/12 sm:w-6/12 xs:w-9/12 h-full object-contain"
            src="/images/PortfolioDetails/Waajoo/waajoo1.png"
            alt=""
            style={{ width: "46.5%" }}
          />
          <img
            className="lg:w-7/12 sm:w-6/12 xs:w-9/12 h-full object-contain"
            src="/images/PortfolioDetails/Waajoo/waajoo1a.png"
            alt=""
            style={{ width: "50%" }}
          />
        </div>
      </div>
    </div>
  )
}

export default Detail
