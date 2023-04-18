import React from "react"

const Detail = () => {
  return (
    <div>
      <div className="mb-16">
        <h1 className="text-white text-xl md:text-2xl mb-8">
          Teaching Solar Energy Systems Design
        </h1>
        <div className="w-full h-72 lg:h-96  2xl:h-100  3xl:h-110">
          <img
            className="w-full h-full object-contain"
            src="/images/PortfolioDetails/Solar/glasgowuni-removebg-preview.png"
            alt=""
          />
        </div>

        <p className="text-grey text-base md:text-lg mt-6">
          The training VR simulation is designed to provide a hands-on
          experience for users on how to install solar panels on the roof of a
          house. The simulation begins by allowing the user to select a location
          on a map, after which they are teleported to the front of a house
          where the solar panel installation will take place. Once inside the
          power room of the house, the user is given guidance on how to install
          the solar energy components
          (https://ieeexplore.ieee.org/document/9766460)
        </p>
        <p className="text-grey text-base md:text-lg mt-6">
          Using hand interactions, the user is able to connect electronic
          components such as the inverter, battery, and meter. The VR simulation
          provides a realistic experience that allows the user to see how the
          installation process works in a safe and controlled environment. This
          allows the user to learn at their own pace and with no risk of
          physical harm.
        </p>
        <p className="text-grey text-base md:text-lg mt-6">
          As the user progresses through the simulation, they are able to see
          the impact of their installation choices on the amount of electricity
          generated. The angle and number of solar panels installed affect the
          amount of electricity produced, which is reflected in the readings
          displayed on the meter. This feedback allows the user to experiment
          with different installation options and to see the impact of those
          choices in real time.
        </p>
        <p className="text-grey text-base md:text-lg mt-6">
          Overall, the training VR simulation provides an effective and engaging
          way for users to learn about solar panel installation. By providing a
          hands-on experience, users are able to learn in a way that is both
          informative and entertaining. The simulation's ability to provide
          real-time feedback on installation choices helps users to understand
          the impact of their decisions and to make more informed choices.
        </p>
      </div>
      <div className="mb-16">
        <h1 className="text-white text-xl md:text-2xl mb-8">
          Built for Meta Quest 1 & 2 using Unity Engine
          https://www.youtube.com/watch?v=BiusdZYvxmU
        </h1>
      </div>

      <div className="flex flex-row space-x-2.5">
        <div>
          <img
            className="w-full h-full object-contain"
            src="/images/PortfolioDetails/Solar/solar0.png"
            alt=""
          />
        </div>

        <div>
          <img
            className="w-25rem h-full object-contain"
            src="/images/PortfolioDetails/Solar/solar2.png"
            alt=""
          />
        </div>
      </div>

      <div className="flex flex-row space-x-2.5 my-2">
        <div>
          <img
            className="w-full h-full object-contain"
            src="/images/PortfolioDetails/Solar/solar7.png"
            alt=""
          />
        </div>

        <div>
          <img
            className="w-full h-full object-contain"
            src="/images/PortfolioDetails/Solar/solar8.png"
            alt=""
          />
        </div>
      </div>

      <div className="flex flex-row space-x-2.5 my-2">
        <div>
          <img
            className="w-full h-full object-contain"
            src="/images/PortfolioDetails/Solar/solar3.png"
            alt=""
          />
        </div>

        <div>
          <img
            className="w-full h-full object-contain"
            src="/images/PortfolioDetails/Solar/solar4.png"
            alt=""
          />
        </div>
      </div>

      <div className="flex flex-row space-x-2.5 my-2">
        <div>
          <img
            className="w-full h-full object-contain"
            src="/images/PortfolioDetails/Solar/solar5.png"
            alt=""
          />
        </div>

        <div>
          <img
            className="w-full h-full object-contain"
            src="/images/PortfolioDetails/Solar/solar6.png"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}
export default Detail
