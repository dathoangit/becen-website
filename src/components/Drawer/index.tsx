import { Drawer as D, notification } from 'antd';
import { AiOutlineClose } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { SIDEBAR_MENU } from 'src/configs/sidebar';
import { setScrollName } from 'src/store/scroll/reducer';

export const Drawer = ({
  openDrawer,
  onClose,
}: {
  openDrawer: boolean;
  onClose: () => void;
}) => {
  const dispatch = useDispatch();
  const [api, contextHolder] = notification.useNotification();

  const openNotification = () => {
    api.open({
      message: 'Coming Soon!',
      placement: 'top',
      duration: 1.5,
    });
  };
  const setRouter = (key: string) => {
    onClose();
    if (key === 'whitepaper') {
      window.open('/');
      return;
    }
    dispatch(setScrollName({ scrollName: key }));
  };

  const ExtraComponent = () => {
    return (
      <div className="flex w-60 justify-end items-center">
        {/* <button
          onClick={openNotification}
          className="bg-[#722ED1] border border-[#722ED1] py-3 px-8 rounded-[100px]">
          <span className="text-[16px] text-white font-semibold">
            Contact Us
          </span>
        </button> */}
      </div>
    );
  };

  return (
    <D
      extra={<ExtraComponent />}
      open={openDrawer}
      onClose={onClose}
      className="!bg-black relative"
      closeIcon={<AiOutlineClose size={30} color="#fff" />}
      width="60%"
      placement="right">
      {SIDEBAR_MENU.map((item, index) => {
        const key = String(item.name);

        return (
          <ul className="list-none relative">
            {contextHolder}
            <li className="justify-center z-10 " key={item.name + index}>
              <div
                onClick={() => setRouter(item.key)}
                key={`sub${key}`}
                className="text-[18px] cursor-pointer text-text-primary-dark font-bold">
                {item.name}
              </div>
            </li>
          </ul>
        );
      })}
    </D>
  );
};
