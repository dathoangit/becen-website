import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';
import { useWindowSize } from 'src/hooks/useWindowSize';

export const OurTeam = () => {
  const { isPhone } = useWindowSize();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  };

  const resources = [
    {
      image: '/images/profile-1.png',
      name: 'Mr.Hery Nong',
      position: 'CEO',
    },
    {
      image: '/images/profile-2.png',
      name: 'Mr.Khanh Pham',
      position: 'CEO',
    },
    {
      image: '/images/profile-3.png',
      name: 'Mr.Tho Huu',
      position: 'CEO',
    },
    {
      image: '/images/profile-4.png',
      name: 'Mr.Jimmy',
      position: 'CEO',
    },
    {
      image: '/images/profile-5.png',
      name: 'Mr.Dat Hoang',
      position: 'CEO',
    },
    {
      image: '/images/profile-6.png',
      name: 'Mrs.Hani',
      position: 'CEO',
    },
  ];

  return (
    <div className="bg-white flex flex-col items-center justify-center relative z-10 h-screen">
      <img
        src="/images/bg-5.png"
        alt=""
        className="absolute top-0 left-0 w-full h-screen object-cover"
      />
      <div className="relative container justify-center items-center flex-col 2xl:pt-20 3xl:pt-40">
        <div className="text-center">
          <span className="text-[32px] text-black font-bold">Our Team</span>
        </div>
        <div className="text-center pt-10 w-[80%] mx-auto">
          <span className="text-[18px] text-black">
            Our team thrives on collaboration, making it easy for everyone to
            work together seamlessly, regardless of how many people are involved
            in the process.
          </span>
        </div>
        {isPhone ? (
          <Slider {...settings} className="pt-20">
            {resources.map((r) => (
              <div className="flex justify-center items-center text-center flex-col gap-5">
                <div className="flex justify-center items-center">
                  <img src={r.image} alt="" className="object-cover w-[80%]" />
                </div>
                <div className="flex justify-center items-center text-center flex-col gap-2">
                  <div>
                    <span className="text-[18px] font-bold">{r.name}</span>
                  </div>
                  <div>
                    <span className="text-[18px] font-bold">{r.position}</span>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        ) : (
          <div className="grid grid-cols-3 text-center flex-col gap-x-5 gap-y-14 pt-10">
            {resources.map((r) => (
              <div>
                <div className="flex justify-center items-center">
                  <img src={r.image} alt="" className="object-cover" />
                </div>
                <div className="flex justify-center items-center text-center flex-col gap-2">
                  <div>
                    <span className="text-[18px] font-bold">{r.name}</span>
                  </div>
                  <div>
                    <span className="text-[18px] font-bold">{r.position}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
