import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper.min.css'
// import 'swiper/modules/pagination/pagination.min.css'

const Testimonials = () => {
  const swiperRef = useRef();
  return (
    <>
      <div className="w-11/12  md:w-3/4 mx-auto mt-20">
        <h1 className="text-gold text-base uppercase mb-4">In The News</h1>
        <div className="md:flex justify-between items-center  mb-8">
          <h1 className="text-white text-xl md:text-2xl">
            Client’s
            <br className="hidden md:block" /> Testimonials
          </h1>
          <div className="flex mt-4 md:mt-0">
            <div onClick={() => swiperRef.current.swiper.slidePrev()} className="cursor-pointer rounded-full border border-dark-grey w-14 h-14 flex justify-center items-center mr-4">
              <img src="https://toggletechlab.s3.us-east-2.amazonaws.com/Icons/Chevron+Left.svg" alt="" />
            </div>
            <div  onClick={() => swiperRef.current.swiper.slideNext()} className="cursor-pointer rounded-full border border-dark-grey w-14 h-14 flex justify-center items-center">
              <img src="https://toggletechlab.s3.us-east-2.amazonaws.com/Icons/Chevron+Right.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* slider */}

      <div className="w-11/12 mx-auto md:w-10/12 md:mr-0 md::ml-auto  mt-10 mb-20 cursor-default">
        <Swiper
          ref={swiperRef}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1280: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide>
            <div>
              <div className="mr-1 md:mr-4 border border-dark-grey rounded-xl py-6 px-8  mb-3">
                <img className="w-12 h-10" src="/icons/quote.svg" alt="" />
                <p className="text-grey text-base md:text-lg mt-8">
                  Courteous, professional, great communication skills that
                  really helped us as we are non-technical. We have gotten
                  funding for our pre-seed project from the National Science
                  Foundation (NSF) and will be moving ahead with the team on the
                  next phase.
                </p>
                <h1 className="text-white text-xl mt-8">Gil R.</h1>
                <p className="text-grey text-sm">University of Austin</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div className="mr-1 md:mr-4 border border-dark-grey rounded-xl py-6 px-8  mb-3">
                <img className="w-12 h-10" src="/icons/quote.svg" alt="" />
                <p className="text-grey text-base md:text-lg mt-8">
                  I'm extremely happy with the work the team did. They acted
                  independently and solved complex problems that had no ready
                  made solutions before our project. We are now ready with a
                  working demo
                </p>
                <h1 className="text-white text-xl mt-8">Nikolai K.</h1>
                <p className="text-grey text-sm">Voctiv</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div>
              <div className="mr-1 md:mr-4 border border-dark-grey rounded-xl py-6 px-8  mb-3">
                <img className="w-12 h-10" src="/icons/quote.svg" alt="" />
                <p className="text-grey text-base md:text-lg mt-8">
                  Very professional and asked all the right questions and was
                  quick to grasp our goal and was able to improve the overall
                  project. She moved our VR project towards completion which
                  helps us to get a VR development Grant in our field. She was
                  thorough, on time and was able to communicate with our team
                  and was quite helpful in refining the project. I will be
                  working with them again.
                </p>
                <h1 className="text-white text-xl mt-8">T.J Gill</h1>
                <p className="text-grey text-sm">Sprite Investment Group</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="">
              <div className="mr-1 md:mr-4 border border-dark-grey rounded-xl py-6 px-8  mb-3">
                <img className="w-12 h-10" src="https://toggletechlab.s3.us-east-2.amazonaws.com/Icons/quote.svg" alt="" />
                <p className="text-grey text-base md:text-lg mt-8">
                  We had a fantastic experience working with Toggle Tech Lab.
                  They are very professional and knowledgeable. Clearly
                  understood our requirements and executed them in time. We will
                  definitely be working with them again in the future!
                  Excellent!"
                </p>
                <h1 className="text-white text-xl mt-8">Viktor S.</h1>
                <p className="text-grey text-sm">Bond University</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
       
      </div>
    </>
  );
};

export default Testimonials;

