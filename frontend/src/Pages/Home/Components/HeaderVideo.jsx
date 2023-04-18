import React from "react"

const HeaderVideo = () => {
  return (
    <div className="w-11/12  md:w-3/4 mx-auto mb-16">
      <iframe
        src="https://www.youtube.com/embed/QlW0iTOAUE4?autoplay=1&showinfo=0&controls=0&playlist=QlW0iTOAUE4"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        className="w-screen h-screen md:object-cover object-fill bg-black opacity-30 z-0 "
      ></iframe>
    </div>
  )
}

export default HeaderVideo
