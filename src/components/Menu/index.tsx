import { SIDEBAR_MENU } from 'src/configs/sidebar';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { setScrollName } from 'src/store/scroll/reducer';

export const Menu = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const setRouter = (key: string) => {
    if (key === 'whitepaper') {
      window.open('');
      return;
    }
    dispatch(setScrollName({ scrollName: key }));
  };

  return (
    <ul className="list-none flex gap-5 xl:gap-10 items-center justify-end xl:justify-center h-full mb-0 z-10 flex-1">
      {SIDEBAR_MENU.map((item, index) => {
        const key = String(index + 1);

        // if (item.href) {
        //   return (
        //     <Link href={item.href ?? '/'} key={item.name + index.toString()}>
        //       <li className="z-10 cursor-pointer" key={item.name + index}>
        //         <div
        //           onClick={() => setRouter(item.key)}
        //           key={`sub${key}`}
        //           className={`text-[#1F2224] text-[33px] font-bold font-amaticSC`}>
        //           {item.name}
        //         </div>
        //       </li>
        //     </Link>
        //   );
        // }

        return (
          <li className="z-10 cursor-pointer" key={item.name + index}>
            <div
              onClick={() => setRouter(item.key)}
              key={`sub${key}`}
              className={`text-[#1F2224] text-[18px] font-amaticSC font-bold`}>
              {item.name}
            </div>
          </li>
        );
      })}
    </ul>
  );
};
