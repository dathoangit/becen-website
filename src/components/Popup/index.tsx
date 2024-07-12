import React from 'react';

interface PopupProps {
  showPopup: boolean;
  handleOutsideClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  message: string;
}

export const Popup: React.FC<PopupProps> = ({ showPopup, handleOutsideClick, message }) => {
  if (!showPopup) return null;

  return (
    <>
      <div
        onClick={handleOutsideClick}
        className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50"></div>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 min-w-[300px] min-h-[150px] flex justify-center items-center text-center bg-[#F2CD04] rounded-2xl px-20 py-10">
        <span className="text-3xl lg:text-[40px] xl:text-[50px] font-bold text-[#242424]">
          {message}
        </span>
      </div>
    </>
  );
};
