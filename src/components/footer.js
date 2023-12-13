import * as React from "react";
import { Grid, Typography } from "@mui/material";
import casaDiegoLogo from "../assets/casa-diego-invertido.svg";
import iconFace from "../assets/facebook.svg";
import iconInsta from "../assets/instagram.svg";

function FooterDiego() {
  return (
    <div className="h-[170px] bg-text flex items-center justify-center">
      <Grid container maxWidth={"xl"} alignItems={"center"} className="p-5">
        <Grid item xs={12} md={2} className="flex items-center">
          <img className="w-[200px] pr-8" src={casaDiegoLogo} alt="Logo" />
        </Grid>
        <Grid item xs={12} md={8} className="flex items-center">
          <Typography className="!text-white !text-[16px] pt-4 md:pt-0">
            Cantilo 4575, Villa Devoto, Ciudad de Buenos Aires.
          </Typography>
        </Grid>
        <Grid item xs={12} md={2} className="flex items-center pt-8 md:pt-0">
          <img className="mr-4 w-5" src={iconFace} alt="Logo" />
          <img className="w-5" src={iconInsta} alt="Logo" />
        </Grid>
      </Grid>
    </div>
  );
}

export default FooterDiego;
