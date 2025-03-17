import React from "react";
import classes from "../../styles/components/home/feature.module.scss";
import { useMediaQuery } from "@mui/material";

const Feature = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <div className={classes.main}>
      <div className={classes["first-feature"]}>
        <div className={classes.image}>
         <img src="/dummy1.webp" alt="" />
        </div>
        <div className={classes.description}>
          <h1>Easy to Use, {isMobile ?  "" : <br/>}Easy to Love</h1>
          <h3>In the office or on the go, TeamPassword makes storing and {isMobile ?  "" : <br/>} sharing passwords safely a synch.</h3>
        </div>
      </div>
      <div className={classes["second-feature"]}>
        <div className={classes.image}>
        <img src="/dummy2.webp" alt="" />
        </div>
        <div className={classes.description}>
          <h1>Ditch the spreadsheet</h1>
          <h3>TeamPassword keeps all your logins safe and in-sync, so your team {isMobile ?  "" : <br/>} can get the access they need when they need it.</h3>
        </div>
      </div>
    </div>
  );
};

export default Feature;
