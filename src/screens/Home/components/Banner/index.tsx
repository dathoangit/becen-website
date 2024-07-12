import React from 'react';
import { notification } from 'antd';

export const Banner = () => {
  const [api, contextHolder] = notification.useNotification();

  const openNotification = () => {
    api.open({
      message: 'Coming Soon!',
      placement: 'top',
      duration: 1.5,
    });
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <img
        src="/images/bg-1.png"
        alt=""
        className="absolute top-0 left-0 w-full h-screen object-cover object-left-bottom"
      />
      {contextHolder}
      <div className="relative container grid grid-cols-1 xl:grid-cols-2 gap-10 3xl:-translate-y-10">
        <div>
          <div className="flex">
            <div className="flex flex-col justify-end gap-5 xl:gap-0">
              <div className="flex items-center gap-2 bg-[#F7F1FF] w-max px-5 py-2 rounded-[20px]">
                <img src="/icons/icon-1.png" alt="" className="" />
                <span className="text-[16px] text-[#722ED1]">
                  About Us. Learn more
                </span>
              </div>
              <div className="pt-2 md:pt-6 flex">
                <span className="text-[40px] md:text-[48px] text-[#1F2224] font-amaticSC font-bold">
                  Blockchain, Web3 Builder for Builders
                </span>
              </div>
            </div>
          </div>
          <div className="pt-3">
            <span className="text-[16px] md:text-[22px] text-[#1F2224]">
              Becen develops and provides blockchain tools and products with the
              best features to solve customers' issues and challenges. We
              promote creativity to accelerate the progress towards Web3, where
              users truly own their data in the online space.
            </span>
          </div>
          <div className="flex justify-start items-center pt-8 gap-10 md:gap-20">
            {/* <button
              onClick={openNotification}
              className="bg-[#722ED1] py-3 px-8 rounded-[100px]">
              <span className="text-[16px] text-white">Contact Us</span>
            </button> */}
            <button
              onClick={openNotification}
              className="bg-white border py-3 px-8 rounded-[100px] border-[#722ED1]">
              <span className="text-[16px] text-[#722ED1]">Learn more</span>
            </button>
          </div>
        </div>
        <div className="flex justify-end items-end w-full">
          <img src="images/image-1.png" className="object-cover w-full" />
        </div>
      </div>
    </div>
  );
};
