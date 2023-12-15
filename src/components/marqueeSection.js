import React, { forwardRef, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import AOS from "aos";

AOS.init();

const Marquee = forwardRef(
  ({ id, texto, customClasses, children, marqueeTextSize, marqueeContentGridSizes, ...rest }, ref) => {
    const marqueeClasses = `relative flex overflow-hidden w-[98vw] justify-center pb-80 lg:pb-56 ${
      customClasses || ""
    }`;

    useEffect(() => {
      // Inicializa AOS dentro del componente
      AOS.refresh();
    }, []);

    return (
      <div className={marqueeClasses} {...rest} id={id} ref={ref}>       
        <div className="py-12 animate-marquee whitespace-nowrap pr-8">
          <Typography className="!text-[70px] sm:!text-[100px] md:!text-[130px] lg:!text-[220px] !font-[900] text-text js-hoverable-element">
            {texto}
          </Typography>
        </div>
        <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap pl-4">
          <Typography className="!text-[70px] sm:!text-[100px] md:!text-[130px] lg:!text-[220px] !font-[900] text-text js-hoverable-element">
            {texto}
          </Typography>
        </div>
        <Grid
          container
          maxWidth={"xl"}
          justifyContent={"center"}
          className="absolute top-[7rem] sm:top-[8.7rem] md:top-[10.5rem] lg:top-[15.5rem]"
        >
          <Grid
            item
            xs={marqueeContentGridSizes?.xs || 11}
            md={marqueeContentGridSizes?.md || 9}
            lg={marqueeContentGridSizes?.lg || 8}
            xl={marqueeContentGridSizes?.xl || 7}
            data-aos="zoom-in"
            data-aos-delay="100"
            data-aos-duration="500"
          >
            <div className="p-8 md:p-20 bg-gray-light bg-opacity-40 rounded-xl backdrop-blur-lg flex justify-around items-end">
              <Grid container spacing={3} className="p-5">
                {children}
              </Grid>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
);

export default Marquee;