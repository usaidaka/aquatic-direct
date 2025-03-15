import React, { useState } from "react";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { MdExpandMore } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { useMediaQuery } from "@mui/material";
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
          <Accordion className={classes.accordion}>
            <AccordionSummary
              expandIcon={<MdExpandMore />}
              className={classes["nav-item"]}
            >
              Newsroom
            </AccordionSummary>
            <AccordionDetails>
              <a href="#">BLOG</a>
              <a href="#">CUSTOMER STORIES</a>
              <a href="#">IN THE PRESS</a>
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
