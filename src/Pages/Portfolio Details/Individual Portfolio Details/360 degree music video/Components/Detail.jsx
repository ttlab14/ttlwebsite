import React from "react";

const Detail = () => {
  return (
    <div>
      <div className="mb-16">
        <h1 className="text-white text-xl md:text-2xl mb-8">
          360 Degree Music Video
        </h1>
        <div className="w-full sm:h-72 lg:h-96  2xl:h-100  3xl:h-110"></div>
        <p className="text-grey text-base md:text-lg mt-6">
          Virtual reality (VR) has revolutionized the way we consume and
          experience media. 360-degree videos, in particular, offer an immersive
          experience where viewers can look around in any direction, as if they
          are actually present in the environment captured by the video. This
          technology has been used in various fields, including entertainment,
          education, and marketing, and has proven to be an effective tool in
          engaging and educating audiences..
        </p>
        <p className="text-grey text-base md:text-lg mt-6">
          One of the most significant advantages of using 360-degree videos in
          VR is the level of immersion it provides. Unlike traditional videos,
          where the viewer's perspective is limited to a fixed point of view,
          360-degree videos allow viewers to experience an environment as if
          they are physically present. This creates a sense of presence that
          makes the experience more realistic and engaging. This is especially
          beneficial in industries such as real estate, where potential buyers
          can take a virtual tour of a property before physically visiting it.
        </p>
        <p className="text-grey text-base md:text-lg mt-6">
          Another advantage of using 360-degree videos in VR is the ability to
          capture and communicate complex information. For example, in the
          medical industry, surgeons can use 360-degree videos to train and
          educate medical students about complicated surgical procedures.
          Similarly, architects and engineers can use this technology to
          showcase their designs to clients, allowing them to experience the
          design in its entirety.
        </p>
        <p className="text-grey text-base md:text-lg mt-6">
          360-degree videos in VR also provide opportunities for interactive
          storytelling. By incorporating interactive elements such as clickable
          hotspots, users can control their experience and engage with the
          content on a deeper level. This makes the experience more personalized
          and engaging, and can be used effectively in advertising and
          marketing.
        </p>
        <p className="text-grey text-base md:text-lg mt-6">
          Despite its numerous advantages, there are some challenges to using
          360-degree videos in VR. For example, creating high-quality videos
          requires specialized equipment and skills. Additionally, since the
          technology is still relatively new, there are limitations in terms of
          the number of platforms and devices that support it. However, as the
          technology evolves and becomes more accessible, these challenges are
          likely to be overcome.
        </p>
        <p className="text-grey text-base md:text-lg mt-6">
          In conclusion, 360-degree videos in VR offer a unique and immersive
          experience that has the potential to revolutionize the way we consume
          and experience media. Its applications in various industries have
          proven to be effective, and as the technology becomes more accessible,
          we can expect to see even more innovative uses in the future.
        </p>
      </div>
      <div className="mb-16">
        <h1 className="text-white text-xl md:text-2xl mb-8">
          Built for Meta Quest 1 & 2 using Unity Engine
        </h1>
        <div className="flex sm:flex-row flex-col gap-5 items-center">
          <iframe
            width="70%"
            height="500px"
            src="https://www.youtube.com/embed/2GnSmbsuGG4?start=6"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Detail;
