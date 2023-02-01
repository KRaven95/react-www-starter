import React from "react";
import Grid from "@components/arrangement/Grid/Grid";
import { Debug } from "src/debug/Debug";
import "./Main.scss";
import GridCol from "@components/arrangement/Grid/GridCol";

const Main = () => {
  return (
    <div className="main">
      <section>
        <h1>test</h1>
        <Grid rowGap={24}>
          <GridCol className="xs-12 md-6 lg-4">
            <h1>test1</h1>
            <h2>test2</h2>
            <p className="p1">test3</p>
          </GridCol>
          <GridCol className="xs-12 md-6 lg-4">
            <h1>test1</h1>
            <h2>test2</h2>
            <p className="p1">test3</p>
          </GridCol>
          <GridCol className="xs-12 md-6 lg-4">
            <h1>test1</h1>
            <h2>test2</h2>
            <p className="p1">test3</p>
          </GridCol>
        </Grid>
      </section>
    </div>
  );
};

export default Main;
