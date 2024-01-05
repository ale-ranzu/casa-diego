import React, { useState } from "react";
import { Grid, Modal, Backdrop, Fade, Button, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CloseIcon from "@mui/icons-material/Close";

const GaleriaImg = ({ images }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToPrevious = () => {
    setCurrentImageIndex(
      (currentImageIndex + images.length - 1) % images.length
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  return (
    <div>
      <Grid container className="!mt-12">
        {images.map((image, index) => (
          <Grid
            item
            xs={6}
            sm={4}
            lg={2}
            key={index}
            className="js-hoverable-element"
          >
            <img
              src={image}
              alt={`Image ${index + 1}`}
              onClick={() => openLightbox(index)}
              data-aos="zoom-in-up"
              data-aos-delay={100 + index * 50}
              data-aos-duration="500"
            />
          </Grid>
        ))}
      </Grid>

      <Modal
        open={lightboxOpen}
        onClose={closeLightbox}
        closeAfterTransition
        className="z-0 bg-text bg-opacity-80"
      >
        <Fade in={lightboxOpen}>
          <div className="h-[100dvh] flex items-center">
            <IconButton key="close" onClick={closeLightbox} className="!absolute top-2 right-2">
              <CloseIcon style={{ fontSize: 40, color: "white" }}/>
            </IconButton>
            <Grid container>
              <IconButton
                onClick={goToPrevious}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: 0,
                  zIndex: 1000,
                }}
              >
                <ArrowBackIcon style={{ fontSize: 40, color: "white" }} />
              </IconButton>
              <IconButton
                onClick={goToNext}
                style={{
                  position: "absolute",
                  top: "50%",
                  right: 0,
                  zIndex: 1000,
                }}
              >
                <ArrowForwardIcon style={{ fontSize: 40, color: "white" }} />
              </IconButton>
              <Grid item xs={12} className="flex justify-center items-center">
                <img
                  src={images[currentImageIndex]}
                  alt={`Image ${currentImageIndex + 1}`}
                  className="h-[80dvh] w-auto"
                />
              </Grid>
            </Grid>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default GaleriaImg;
