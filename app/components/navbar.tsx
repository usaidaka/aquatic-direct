import React, { useState } from "react";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { MdExpandMore } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import classes from "../styles/components/navbar.module.scss";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <nav className={classes.navbar}>
      <div className={classes.logo}>aquatic direct</div>

      {/* Burger Menu */}
      <div className={classes.burger} onClick={() => setIsOpen(!isOpen)}>
        <RxHamburgerMenu />
      </div>

      {/* Menu utama */}
      <ul
        className={`${classes["nav-links"]} ${
          isOpen ? classes["nav-active"] : ""
        }`}
      >
        <li>
          <a href="#">About us</a>
        </li>

        {/* Newsroom: Mobile → Accordion, Desktop → Hover */}
        {isMobile ? (
        <Accordion
        sx={{
          width: "100%",
          background: "none",
          color: "white",
          boxShadow: "none",
   
        }}
      >
        <AccordionSummary
          expandIcon={<MdExpandMore style={{ color: "orange" }} />}
          
          sx={{
            fontSize: "16px",
            width: "100%",
            display: "flex",
            // margin: "0px",
            alignItems: "center",
            fontStyle: "normal",
            // marginBottom:"10px",
            "&.Mui-expanded": {
              minHeight: "0px !important",
              "> span": {
                // height:"10px",
              margin:"12px 0 12px",
              padding: "0", // Adjust padding
            },
            }
           }}
            
        >
          Newsroom
        </AccordionSummary>
        <AccordionDetails
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            paddingLeft:"30px"
          }}
        >
          <a
            href="#"
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "14px",
            }}
          >
            BLOG
          </a>
          <a
            href="#"
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "14px",
            }}
          >
            CUSTOMER STORIES
          </a>
          <a
            href="#"
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "14px",
            }}
          >
            IN THE PRESS
          </a>
        </AccordionDetails>
      </Accordion>
        ) : (
          <li className={classes.dropdown}>
            <a href="#" className={classes["nav-item"]}>
              Newsroom ▾
            </a>
            <div className={classes["dropdown-menu"]}>
              <a href="#">BLOG</a>
              <p>Sustainability Insights, information, and news.</p>
              <a href="#">CUSTOMER STORIES</a>
              <p>Our clients' greatest success stories.</p>
              <a href="#">IN THE PRESS</a>
              <p>Our media coverage in print, TV, and radio.</p>
            </div>
          </li>
        )}

        <li>
          <a href="#">For business</a>
        </li>
        <li>
          <a href="#">Shop</a>
        </li>
      </ul>

      {/* CTA Button */}
      <div className={classes.cta}>
        <button className={classes["act-now"]}>Act now</button>
      </div>
    </nav>
  );
};

export default Navbar;
