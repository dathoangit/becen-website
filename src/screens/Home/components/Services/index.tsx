export const Services = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="container flex justify-center items-center flex-col">
        <div className="flex items-center gap-2 bg-[#F7F1FF] w-max px-5 py-2 rounded-[20px]">
          <img src="/icons/icon-2.png" alt="" className="" />
          <span className="text-[16px] text-[#722ED1]">Service</span>
        </div>
        <div className="pt-5 md:pt-8 text-center">
          <span className="text-[32px] font-bold">
            Exhaustive - Powerful - Easy
          </span>
        </div>
        <div className="pt-3 max-w-[650px] text-center">
          <span className="text-[16px] text-[#8989A2] leading-normal">
            We provide comprehensive blockchain solutions. We support, consult,
            and transform your ideas into reality.
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 pt-20 gap-20">
          <div className="flex flex-col items-center">
            <img src="/icons/icon-2.1.png" alt="" className="" />
            <div className="pt-10">
              <span className="text-[20px] font-bold">
                Valuable business insights
              </span>
            </div>
            <div className="pt-10 text-center">
              <span className="text-[16px] text-[#8989A2] leading-normal">
                Conduct idea or product analysis and strategy development
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img src="/icons/icon-2.2.png" alt="" className="" />
            <div className="pt-10">
              <span className="text-[20px] font-bold">Applications</span>
            </div>
            <div className="pt-10">
              <span className="text-[16px] text-[#8989A2] leading-normal">
                - We build Apps, Web Apps, Decentralized Application (DApp)
                <br />
                - Bot/Games Telegram
                <br />
                - Finance Service: Tokenomics, Market Maker...
                <br />
                - LaunchPad Service
                <br />
                - Design, Testing
                <br />
                - Audit Smart Contract
                <br />- Project Analysis
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img src="/icons/icon-2.3.png" alt="" className="" />
            <div className="pt-10">
              <span className="text-[20px] font-bold">Data in real-time</span>
            </div>
            <div className="pt-10 text-center">
              <span className="text-[16px] text-[#8989A2] leading-normal">
                Collect data in real-time from multiple channels and move it
                into a data lake, in its original format.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
