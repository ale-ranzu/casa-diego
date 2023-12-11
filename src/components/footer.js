import * as React from "react";
import { Grid, Typography } from "@mui/material";
import casaDiegoLogo from "../assets/casa-diego-invertido.svg";
import iconFace from "../assets/facebook.svg";
import iconInsta from "../assets/instagram.svg";

function FooterDiego() {
  return (
    <div className="h-[150px] bg-text flex items-center justify-center">
      <Grid container maxWidth={"xl"} alignItems={'center'}>
        <Grid item xs={12} md={10} className="flex items-center">
          <img className="w-[200px] pr-8" src={casaDiegoLogo} alt="Logo" />
          <Typography className="!text-white !text-[16px]">
            Cantilo 4575, Villa Devoto, Ciudad de Buenos Aires.
          </Typography>
        </Grid>
        <Grid item xs={12} md={2}  className="flex items-center">
        <img className="mr-4 w-7" src={iconFace} alt="Logo" />
        <img className="w-7" src={iconInsta} alt="Logo" />
        </Grid>
      </Grid>
    </div>
  );
}

export default FooterDiego;