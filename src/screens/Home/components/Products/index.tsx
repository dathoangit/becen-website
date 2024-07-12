export const Products = () => {
  return (
    <div className="flex justify-center items-center pt-20 md:pt-40">
      <div className="container grid lg:grid-cols-2 gap-20 lg:gap-24 pt-20 ">
        <div className="flex flex-col justify-center items-center md:items-start">
          <div className="flex items-center gap-2 bg-[#F7F1FF] w-max px-5 py-2 rounded-[20px]">
            <img src="/icons/icon-4.png" alt="" className="" />
            <span className="text-[16px] text-[#722ED1]">Our Products</span>
          </div>
          <div className="pt-5 text-center md:text-left">
            <span className="text-[32px] font-amaticSC font-bold">
              Innovative Digital Solutions
            </span>
          </div>

          <div className="pt-5 text-center md:text-left">
            <span className="text-[16px] text-[#8989A2] leading-normal">
              Explore our cutting-edge products: LaunchPad for project
              management, DEXs for secure trading, and Telegram Mini Apps and
              Bots to enhance functionality and automate tasks. Transform your
              digital experience with us!
            </span>
          </div>
        </div>
        <div className="flex justify-end items-start">
          <img src="images/image-4.png" className="object-cover w-[450px]" />
        </div>
      </div>
    </div>
  );
};
