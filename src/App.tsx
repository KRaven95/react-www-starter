import Group from "@components/arrangement/Group/Group";
import Motion from "@components/ux/Motion/Motion";
import React from "react";

const App = () => {
  return (
    <Motion appear={{ duration: 5, active: true, delay: 1 }}>
      {/* <Motion spin={{ duration: 5, active: true }}> */}
      <Group colGap={16}>
        <h1>Hello world 1</h1>
        <h1>Hello world 2</h1>
      </Group>
      {/* </Motion> */}
    </Motion>
  );
};

export default App;
