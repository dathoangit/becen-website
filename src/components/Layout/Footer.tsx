import { FaFacebookSquare } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="flex justify-center bg-white py-5 relative z-10">
      <div className="flex flex-col lg:flex-row lg:justify-between items-center w-[95%]">
        <div className="lg:w-[20%]">
          <img src="icons/logo.svg" className="w-32" />
        </div>
        <div className="flex gap-3 flex-col lg:flex-row justify-center lg:justify-normal items-center lg:items-start pt-5 lg:pt-0">
          <span className="text-[16px] font-amaticSC">
            © 2024 becen. All right reserved.
          </span>
          <span className="text-[16px] font-amaticSC">contact@becen.org</span>
          <span className="text-[16px] font-amaticSC">Privacy Policy</span>
          <span className="text-[16px] font-amaticSC">Terms of Service</span>
        </div>
        <div className="flex justify-center lg:justify-end gap-3 lg:w-[20%] pt-5 lg:pt-0">
        <a
            href="https://www.facebook.com/becenbuilder"
            target="_blank"
            rel="noopener noreferrer">
            <FaFacebookSquare size={40} />
          </a>
          {/* <a
            href="https://t.me/PePeMusk_Channel"
            target="_blank"
            rel="noopener noreferrer">
            <FaSquareXTwitter  size={40}/>
          </a> */}
        </div>
      </div>
    </div>
  );
};
