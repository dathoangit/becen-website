import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { useSelector } from 'react-redux';
import { useWindowSize } from 'src/hooks/useWindowSize';
import { RootState } from 'src/store';
import { useEffect } from 'react';
import { SIDEBAR_MENU } from 'src/configs/sidebar';
import { Element, scroller } from 'react-scroll';
import { Variants } from 'framer-motion';
import { Banner } from './components/Banner';
import { Services } from './components/Services';
import { Chain } from './components/Chain';
import { Products } from './components/Products';
import { OurTeam } from './components/OurTeam';
import { XFriday } from './components/xFriday';

const leftVariants: Variants = {
  offscreen: {
    x: -200,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 0.8,
    },
  },
};

const rightVariants: Variants = {
  offscreen: {
    x: 200,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 0.8,
    },
  },
};

const botVariants: Variants = {
  offscreen: {
    y: 200,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 0.8,
    },
  },
};

const variants: Variants = {
  offscreen: {
    scale: 0,
    opacity: 0,
  },
  onscreen: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 2,
    },
  },
};

export const Home = () => {
  const { scrollName } = useSelector((state: RootState) => state.scroll);
  const { isPhone } = useWindowSize();

  useEffect(() => {
    if (!scrollName) return;
    const propScroll: any = {
      duration: 1000,
      delay: 50,
      smooth: 'easeInOutQuint',
    };
    // if (scrollName === 'home') {
    //   propScroll.offset = -100;
    // }
    if (scrollName === SIDEBAR_MENU[0].key) {
      propScroll.offset = isPhone ? -100 : -85;
    }
    if (scrollName === SIDEBAR_MENU[1].key) {
      propScroll.offset = isPhone ? -50 : -85;
    }
    if (scrollName === SIDEBAR_MENU[2].key) {
      propScroll.offset = isPhone ? -80 : -100;
    }
    if (scrollName === SIDEBAR_MENU[3].key) {
      propScroll.offset = isPhone ? -60 : -50;
    }
    if (scrollName === SIDEBAR_MENU[4].key) {
      propScroll.offset = isPhone ? -100 : 0;
    }
    scroller.scrollTo(scrollName, propScroll);
  }, [scrollName]);

  return (
    <div className="pt-10 bg-white">
        <Banner />
      <Element name={SIDEBAR_MENU[0].key}>
        <Services />
      </Element>
      <Element name={SIDEBAR_MENU[1].key}>
        <Chain />
      </Element>
      <Element name={SIDEBAR_MENU[2].key}>
        <Products />
      </Element>
      <Element name={SIDEBAR_MENU[3].key}>
        <OurTeam />
      </Element>
      {/* <Element name={SIDEBAR_MENU[4].key}>
        <XFriday />
      </Element> */}
    </div>
  );
};
