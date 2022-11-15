import React from "react";
import Layout from "@components/layoutElements/Layout/Layout";
import Drawer from "@components/overlay/Drawer/Drawer";
import Backdrop from "@components/ux/Backdrop/Backdrop";
import Motion from "@components/ux/Motion/Motion";
import Portal from "@components/overlay/Portal/Portal";
import { randomUUID } from "@services/utils/randomUUID";
import Alert from "@components/overlay/Alert/Alert";

const App = () => {
  const [drawerOpened, setDrawerOpened] = React.useState(false);
  const openDrawer = () => setDrawerOpened(true);
  const closeDrawer = () => setDrawerOpened(false);

  const [isWrongAction, setIsWrongAction] = React.useState(false);
  const setWrongAction = () => setIsWrongAction(true);
  const resetWrongAction = () => setIsWrongAction(false);

  return (
    <Layout variant={"sidebar-navbar-content"}>
      <button onClick={openDrawer}>Open overlay window</button>
      {drawerOpened && (
        // <Backdrop open={drawerOpened}>
        <Portal onClick={closeDrawer}>
          <Motion duration={1} slide={{ direction: "left", active: drawerOpened }}>
            <Motion duration={1} appear={drawerOpened}>
              <Drawer>
                <button onClick={closeDrawer}>Close Alert</button>
              </Drawer>
            </Motion>
          </Motion>
        </Portal>
        // </Backdrop>
      )}
    </Layout>
  );
};

export default App;
