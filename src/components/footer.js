import * as React from "react";
import { Grid, Typography } from "@mui/material";
import casaDiegoLogo from "../assets/casa-diego-invertido.svg";
import iconFace from "../assets/facebook.svg";
import iconInsta from "../assets/instagram.svg";
import iconX from "../assets/x.svg";

function FooterDiego() {
  return (
    <div className="h-[190px] md:h-[170px] py-28 md:py-0 bg-text flex items-center justify-center">
      <Grid
        container
        maxWidth={"lg"}
        alignItems={"center"}
        justifyContent={"center"}
        className="p-5"
      >
        <Grid item xs={12} md={2} className="flex items-center">
          <img
            className="w-[200px] pr-8 js-hoverable-element"
            src={casaDiegoLogo}
            alt="Logo"
          />
        </Grid>
        <Grid item xs={12} md={8} className="flex items-center">
          <Typography className="!text-white !text-[16px] pt-4 md:pt-0 js-hoverable-element">
            José Luis Cantilo 4575, Villa Devoto, Ciudad de Buenos Aires.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={2}
          className="flex items-center pt-8 md:pt-0 md:justify-end"
        >
          <a href="https://www.instagram.com/lacasadediego/" target="blank">
            <img
              className="mr-4 w-5 js-hoverable-element"
              src={iconInsta}
              alt="Logo"
            />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61552189174300&mibextid=LQQJ4d"
            target="blank"
          >
            <img
              className="mr-4 w-5 js-hoverable-element"
              src={iconFace}
              alt="Logo"
            />
          </a>
        </Grid>
      </Grid>
    </div>
  );
}

export default FooterDiego;
