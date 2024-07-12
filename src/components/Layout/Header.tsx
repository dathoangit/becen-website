import styles from './styles.module.scss';
import Link from 'next/link';
import React from 'react';
import { CgMenuLeft } from 'react-icons/cg';
import { useWindowSize } from 'src/hooks/useWindowSize';
import { Menu } from '../Menu';
import { notification } from 'antd';

export default function MyHeader({ onOpenMenu }: { onOpenMenu: any }) {
  const { isPhone } = useWindowSize();
  const [api, contextHolder] = notification.useNotification();

  const openNotification = () => {
    api.open({
      message: 'Coming Soon!',
      placement: 'top',
      duration: 1.5,
    });
  };

  return (
    <div className="bg-white flex justify-center items-center fixed top-0 w-screen z-50 h-20 pt-1">
      {contextHolder}
      <div className="flex justify-between items-center py-2 container text-center">
        <div className="w-52 relative z-10">
          <Link href="/" className="flex items-center">
            <img src="/icons/logo.svg" className="w-40" />
          </Link>
        </div>

        {isPhone && (
          <div
            className="cursor-pointer z-10 flex justify-end items-end"
            onClick={onOpenMenu}
            style={{ transform: 'rotate(180deg)' }}>
            <CgMenuLeft color={'#000'} className={`${styles.CgMenuLeft}`} />
          </div>
        )}

        {!isPhone && (
            <div className="relative z-10 flex justify-end items-center gap-10">
              <Menu />
              {/* <button
                onClick={openNotification}
                className="bg-white border border-[#722ED1] py-3 px-8 rounded-[100px]">
                <span className="text-[16px] text-[#722ED1] font-semibold">
                  Contact Us
                </span>
              </button> */}
            </div>
        )}
      </div>
    </div>
  );
}
