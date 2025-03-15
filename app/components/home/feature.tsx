import React from "react";
import classes from "../../styles/components/home/feature.module.scss";

const Feature = () => {
  return (
    <div className={classes.main}>
      <div className={classes["first-feature"]}>
        <div className={classes.image}>
          <h1>atas kiri</h1>
        </div>
        <div className={classes.description}>
          <h1> atas kanan</h1>
        </div>
      </div>
      <div className={classes["second-feature"]}>
        <div className={classes.image}>
          <h1>bawah kiri</h1>
        </div>
        <div className={classes.description}>
          <h1>bawah kanan</h1>
        </div>
      </div>
    </div>
  );
};

export default Feature;
