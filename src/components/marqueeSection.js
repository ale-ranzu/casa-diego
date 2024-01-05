import React, { forwardRef, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import AOS from "aos";

AOS.init();

const Marquee = forwardRef(
  (
    {
      id,
      texto,
      customClasses,
      children,
      marqueeTextSize,
      marqueeContentGridSizes,
      ...rest
    },
    ref
  ) => {
    const marqueeClasses = `relative flex overflow-hidden w-[98vw] justify-center pb-80 lg:pb-56 ${
      customClasses || ""
    }`;

    useEffect(() => {
      // Inicializa AOS dentro del componente
      AOS.refresh();
    }, []);

    return (
      <div className={marqueeClasses} {...rest} id={id} ref={ref}>
        <Grid container maxWidth={"xl"} justifyContent={"center"}>
          <Grid item xs={12} className="text-center">
            <Typography
              className="!text-[50px] md:!text-[70px] text-text js-hoverable-element !font-title"
              data-aos="zoom-in"
              data-aos-delay="100"
              data-aos-duration="500"
            >
              {texto}
            </Typography>
          </Grid>
          <Grid
            item
            xs={marqueeContentGridSizes?.xs || 11}
            md={marqueeContentGridSizes?.md || 9}
            lg={marqueeContentGridSizes?.lg || 8}
            xl={marqueeContentGridSizes?.xl || 7}
            data-aos="zoom-in"
            data-aos-delay="200"
            data-aos-duration="500"
          >
            <div className="p-8 md:p-20 bg-white rounded-sm backdrop-blur-lg flex justify-around items-end">
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
