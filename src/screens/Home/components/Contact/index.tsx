export const Contact = () => {
  return (
    <div className="flex justify-center items-center pt-20 md:pt-40">
      <div className="container grid lg:grid-cols-2 gap-x-20 md:gap-x-24">
        <div className="flex justify-start items-start">
          <img
            src="images/image-3.png"
            className="object-cover w-[450px] hidden md:block"
          />
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-2 bg-[#F7F1FF] w-max px-5 py-2 rounded-[20px]">
            <img src="/icons/icon-3.png" alt="" className="" />
            <span className="text-[16px] text-[#722ED1]">Support Chains</span>
          </div>
          <div className="pt-5 text-center md:text-left">
            <span className="text-[32px] font-amaticSC font-bold">
              Launch with the best stack
            </span>
          </div>

          <div className="pt-3 text-center md:text-left">
            <span className="text-[16px] text-[#8989A2] leading-normal">
              Unlock the limitless potential of blockchain technology with our
              comprehensive multi-chain network support: Your key to unlocking a
              world of opportunities.
            </span>
          </div>
          <div className="pt-2 text-center md:text-left">
            <span className="text-[16px] text-[#8989A2] leading-normal">
              Supported Chains: Ethereum, Ton, Binance Smart Chain, Polygon, Arbitrum, Sui, Aptos...
            </span>
          </div>
        </div>
        <div className="md:hidden flex justify-start items-start pt-20">
          <img
            src="images/image-3.png"
            className="object-cover w-[450px] block md:hidden"
          />
        </div>
      </div>
    </div>
  );
};
