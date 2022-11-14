import React from "react";
import Layout from "@components/layoutElements/Layout/Layout";
import Drawer from "@components/overlay/Drawer/Drawer";
import Backdrop from "@components/ux/Backdrop/Backdrop";
import Motion from "@components/ux/Motion/Motion";
import Portal from "@components/arrangement/Portal/Portal";

const App = () => {
  const [drawerOpened, setDrawerOpened] = React.useState(false);
  const openDrawer = () => setDrawerOpened(true);
  const closeDrawer = () => setDrawerOpened(false);

  const [isWrongAction, setIsWrongAction] = React.useState(false);
  const setWrongAction = () => setIsWrongAction(true);
  const resetWrongAction = () => setIsWrongAction(false);

  return (
    <Layout variant={"sidebar-navbar-content"}>
      <button onClick={openDrawer}>Open drawer</button>
      <Portal wrapperId="modals">
        <Backdrop open={drawerOpened} onClick={setWrongAction}>
          <Motion appear={drawerOpened} duration={1}>
            <Motion slide={{ active: drawerOpened, direction: "left" }} duration={1}>
              <Motion shake={isWrongAction} duration={2} onAnimationEnd={resetWrongAction}>
                <Drawer closeFunction={closeDrawer} />
              </Motion>
            </Motion>
          </Motion>
        </Backdrop>
      </Portal>
    </Layout>
  );
};

export default App;
