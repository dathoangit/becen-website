import React, { useState } from 'react';
import { Layout } from 'antd';
import MyHeader from './Header';
import { useWindowSize } from 'src/hooks/useWindowSize';
import { Drawer } from '../Drawer';
import { Footer } from './Footer';

const { Content, Sider } = Layout;

export default ({ children }: any) => {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const { isPhone } = useWindowSize();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <MyHeader onOpenMenu={setIsOpenDrawer} />

      <Layout>
        {isPhone && (
          <Drawer
            openDrawer={isOpenDrawer}
            onClose={() => setIsOpenDrawer(false)}
          />
        )}

        <Layout className="">
          <Content>{children}</Content>
        </Layout>
      </Layout>
      <Footer />
    </Layout>
  );
};
