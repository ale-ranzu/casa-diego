import React, { useEffect } from "react";
import {
  Divider,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  Paper,
} from "@mui/material";
import Nav from "./components/nav";
import FooterDiego from "./components/footer";
import ContactForm from "./components/contactForm";
import Icon from "./components/icon";
import CustomCursor from "./components/customCursor";
import GaleriaImg from "./components/galeriaImg";
import RoomServiceTwoToneIcon from "@mui/icons-material/RoomServiceTwoTone";
import SettingsRemoteTwoToneIcon from "@mui/icons-material/SettingsRemoteTwoTone";
import Restaurant from "@mui/icons-material/Restaurant";
import SafetyCheckTwoToneIcon from "@mui/icons-material/SafetyCheckTwoTone";
import LocalBarTwoToneIcon from "@mui/icons-material/LocalBarTwoTone";
import CleaningServicesTwoToneIcon from "@mui/icons-material/CleaningServicesTwoTone";
import DryCleaningTwoToneIcon from "@mui/icons-material/DryCleaningTwoTone";
import DirectionsCarFilledTwoToneIcon from "@mui/icons-material/DirectionsCarFilledTwoTone";
import AirportShuttleTwoToneIcon from "@mui/icons-material/AirportShuttleTwoTone";
import StadiumTwoToneIcon from "@mui/icons-material/StadiumTwoTone";
import LunchDiningTwoToneIcon from "@mui/icons-material/LunchDiningTwoTone";
import TheaterComedyTwoToneIcon from "@mui/icons-material/TheaterComedyTwoTone";
import TourTwoToneIcon from "@mui/icons-material/TourTwoTone";
import DateRangeOutlined from "@mui/icons-material/DateRangeOutlined";
import "./App.css";
import "./styles.scss";
import AOS from "aos";
import img1 from "./assets/cesped-sintetico.jpg";
import img2 from "./assets/pileta-quincho.jpg";
import img3 from "./assets/bar.jpg";
import img4 from "./assets/cama.jpg";
import img5 from "./assets/comedor.jpg";
import img6 from "./assets/living-comedor.jpg";
import img7 from "./assets/dormitorio-principal.jpg";
import img8 from "./assets/pileta-climatizada.jpg";
import img9 from "./assets/comedor-principal.jpg";
import img10 from "./assets/mueble.jpg";
import img11 from "./assets/diego_tota.jpg";
import img12 from "./assets/diego_y_familia_1.jpg";
import img13 from "./assets/panoramica.jpg";
import img14 from "./assets/pano-patio.jpg";
import img15 from "./assets/balcon.jpg";
import img16 from "./assets/banio.jpg";
import italiano from "./assets/italia.svg";
import espaniol from "./assets/espania.svg";
import ingles from "./assets/ingles.svg";
import { useTranslation } from "react-i18next";
import i18n from "./i18n";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    {
      id: "cotizar",
      text: "Cotizar",
      targetId: "cotizar",
      onClick: () => scrollToSection("cotizar"),
    },
    {
      id: "descripcion",
      text: "Descripción",
      targetId: "descripcion",
      onClick: () => scrollToSection("descripcion"),
    },
    {
      id: "servicios",
      text: "Servicios",
      targetId: "servicios",
      onClick: () => scrollToSection("servicios"),
    },
    {
      id: "language-es",
      targetId: "espaniol",
      onClick: () => i18n.changeLanguage("es"),
      type: "language",
      text: "Español",
      language: "es",
      svg: espaniol, // Replace with the actual URL of the Spanish flag SVG icon
      url: "/es", // Replace with the actual URL for the Spanish version of your site
    },
    {
      id: "language-en",
      targetId: "english",
      onClick: () => i18n.changeLanguage("en"),
      type: "language",
      text: "English",
      language: "en",
      svg: ingles, // Replace with the actual URL of the English flag SVG icon
      url: "/en", // Replace with the actual URL for the English version of your site
    },
    {
      id: "language-it",
      targetId: "italiano",
      onClick: () => i18n.changeLanguage("it"),
      type: "language",
      text: "Italiano",
      language: "it",
      svg: italiano, // Replace with the actual URL of the English flag SVG icon
      url: "/it", // Replace with the actual URL for the English version of your site
    },
  ];

  const { t } = useTranslation();

  return (
    <div className="App">
      <CustomCursor />
      {/* <!-- NAV--> */}
      <Nav links={navLinks} />

      {/* <!-- INICIO --> */}
      <div className="bg-inicio mt-0 h-[100dvh] bg-blend-multiply js-hoverable-element">
        <div className="w-full h-[100dvh] bg-black bg-opacity-60 flex flex-col justify-center items-center">
          <Typography
            variant="h1"
            className="!text-white text-center"
            data-aos="zoom-in"
            data-aos-easing="ease-in-sine"
          >
            Casa Diego
          </Typography>
          <Divider
            className="!border-white min-w-[40%] !mt-[65px] !mb-[50px]"
            data-aos="zoom-in"
            data-aos-delay="100"
            data-aos-easing="ease-in-sine"
          />
          <Typography
            variant="h4"
            className="text-white text-center w-4/5"
            data-aos="zoom-in"
            data-aos-delay="200"
            data-aos-easing="ease-in-sine"
          >
            {t("slogan")}
          </Typography>
        </div>
      </div>
      <main className="flex flex-col items-center pt-6 overflow-hidden">
        {/* <!-- TEXTO 1 --> */}
        <Grid
          container
          spacing={4}
          maxWidth={"xl"}
          justifyContent={"center"}
          alignItems={"center"}
          className="!px-6 pt-16 pb-32 lg:pt-32 lg:pb-60 lg:px-0"
        >
          <Grid item xs={12} className="md:text-center">
            <Typography
              variant="h2"
              data-aos="zoom-in"
              data-aos-delay="100"
              data-aos-duration="500"
              data-aos-easing="ease-in-sine"
              className="js-hoverable-element"
            >
              {t("title1")}
            </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography
              className="js-hoverable-element"
              data-aos="zoom-in"
              data-aos-delay="200"
              data-aos-duration="500"
              data-aos-easing="ease-in-sine"
            >
              {t("texto1")}
            </Typography>
          </Grid>
        </Grid>

        {/* <!-- RESERVA --> */}

        <Grid container maxWidth={"xl"} id="cotizar">
          <Grid
            item
            xs={12}
            className="flex justify-center"
            data-aos="zoom-in"
            data-aos-delay="50"
            data-aos-duration="500"
          >
            <DateRangeOutlined className="text-gold !text-[50px] my-6 js-hoverable-element" />
          </Grid>
        </Grid>
        <Grid
          container
          maxWidth={"xl"}
          justifyContent={"center"}
          className="pb-48"
        >
          <Grid item xs={10} md={6} className="!pt-[4rem] md:!-ml-[3rem]">
            <Typography
              variant="h3"
              data-aos="zoom-in"
              data-aos-delay="150"
              data-aos-duration="500"
              className="!mb-[1rem] js-hoverable-element md:text-center"
            >
              {t("reservaAhora")}
            </Typography>
            <Typography
              data-aos="zoom-in"
              data-aos-delay="200"
              data-aos-duration="500"
              className="js-hoverable-element pb-8"
            >
              {t("textoContacto")}
            </Typography>
          </Grid>
          <ContactForm />
        </Grid>

        {/* <!-- ICONOS COMODIDADES --> */}
        <Grid
          container
          justifyContent={"center"}
          className="bg-text py-24 px-4 lg:px-0"
          id="descripcion"
        >
          <Grid item xs={12}>
            <Typography
              variant="h3"
              className="text-center pb-12 js-hoverable-element text-white"
              data-aos="zoom-in"
              data-aos-delay="100"
              data-aos-duration="500"
            >
              {t("titleDescripcion")}
            </Typography>
          </Grid>
          <Grid container justifyContent={"center"} spacing={5}>
            <Grid
              item
              xs={6}
              sm={4}
              lg={2}
              sx={{ marginLeft: { md: 2 } }}
              className="text-center mx-auto py-3"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="500"
            >
              <Icon name="iconCasa" text={t("m2cubiertos")} />
            </Grid>
            <Grid
              item
              xs={6}
              sm={4}
              lg={2}
              className="text-center mx-auto py-3 "
              data-aos="fade-up"
              data-aos-delay="150"
              data-aos-duration="500"
            >
              <Icon name="iconJardin" text={t("m2descubiertos")} />
            </Grid>
            <Grid
              item
              xs={6}
              sm={4}
              lg={2}
              className="text-center mx-auto py-3"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="500"
            >
              <Icon name="iconPisos" text={t("pisos")} />
            </Grid>
            <Grid
              item
              xs={6}
              sm={4}
              lg={2}
              className="text-center mx-auto py-3"
              data-aos="fade-up"
              data-aos-delay="250"
              data-aos-duration="500"
            >
              <Icon name="iconHabitaciones" text={t("habitaciones")} />
            </Grid>
            <Grid
              item
              xs={6}
              sm={4}
              lg={2}
              className="text-center mx-auto py-3"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="500"
            >
              <Icon name="iconLiving" text={t("living")} />
            </Grid>

            <Grid
              item
              xs={6}
              sm={4}
              lg={2}
              sx={{ marginLeft: { md: 2 } }}
              className="text-center mx-auto py-3"
              data-aos="fade-up"
              data-aos-delay="150"
              data-aos-duration="500"
            >
              <Icon name="iconComedor" text={t("comedor")} />
            </Grid>
            <Grid
              item
              xs={6}
              sm={4}
              lg={2}
              className="text-center mx-auto py-3"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="500"
            >
              <Icon name="iconCocina" text={t("cocina")} />
            </Grid>
            <Grid
              item
              xs={6}
              sm={4}
              lg={2}
              className="text-center mx-auto py-3"
              data-aos="fade-up"
              data-aos-delay="250"
              data-aos-duration="500"
            >
              <Icon name="iconBanio" text={t("bano")} />
            </Grid>
            <Grid
              item
              xs={6}
              sm={4}
              lg={2}
              className="text-center mx-auto py-3"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="500"
            >
              <Icon name="iconCesped" text={t("jardin")} />
            </Grid>
            <Grid
              item
              xs={6}
              sm={4}
              lg={2}
              className="text-center mx-auto py-3"
              data-aos="fade-up"
              data-aos-delay="350"
              data-aos-duration="500"
            >
              <Icon name="iconQuincho" text={t("quincho")} />
            </Grid>

            <Grid
              item
              xs={6}
              sm={4}
              lg={2}
              mdOffset={1}
              className="text-center mx-auto py-3"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="500"
            >
              <Icon name="iconParrilla" text={t("parrilla")} />
            </Grid>
            <Grid
              item
              xs={6}
              sm={4}
              lg={2}
              className="text-center mx-auto py-3"
              data-aos="fade-up"
              data-aos-delay="250"
              data-aos-duration="500"
            >
              <Icon name="iconPileta" text={t("pileta")} />
            </Grid>
            <Grid
              item
              xs={6}
              sm={4}
              lg={2}
              className="text-center mx-auto py-3"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="500"
            >
              <Icon name="iconCapacidad" text={t("capacidad")} />
            </Grid>
            <Grid
              item
              xs={6}
              sm={4}
              lg={2}
              className="text-center mx-auto py-3"
              data-aos="fade-up"
              data-aos-delay="350"
              data-aos-duration="500"
            >
              <Icon name="iconMobiliario" text={t("mobiliario")} />
            </Grid>
            <Grid
              item
              xs={6}
              sm={4}
              lg={2}
              className="text-center mx-auto py-3"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="500"
            >
              <Icon name="iconCopa" text={t("recuerdos")} />
            </Grid>
          </Grid>
        </Grid>

        {/* <!-- IMAGENES Y TEXTO 1 --> */}
        <Grid
          container
          spacing={5}
          maxWidth={"xl"}
          alignItems={"center"}
          justifyContent={"center"}
          className="pt-36 pb-24 px-4 xl:px-0"
        >
          <Grid item xs={12} md={5}>
            <Typography
              variant="h3"
              data-aos="zoom-in"
              data-aos-delay="150"
              data-aos-duration="500"
              className="!mb-[1rem] js-hoverable-element"
            >
              {t("title2")}
            </Typography>
            <Typography
              data-aos="zoom-in"
              data-aos-delay="200"
              data-aos-duration="500"
              className="js-hoverable-element"
            >
              {t("texto2")}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5}>
            <img
              src={img12}
              alt="El bar"
              className="w-full rounded-md js-hoverable-element"
              data-aos="zoom-in"
              data-aos-delay="100"
              data-aos-duration="500"
            />
          </Grid>
        </Grid>

        {/* <!-- IMAGENES Y TEXTO 2 --> */}
        <Grid
          container
          spacing={5}
          maxWidth={"xl"}
          alignItems={"center"}
          justifyContent={"center"}
          className="py-36 px-4 xl:px-0"
        >
          <Grid item xs={12} md={5}>
            <img
              src={img11}
              alt="El bar"
              className="w-full rounded-md js-hoverable-element"
              data-aos="zoom-in"
              data-aos-delay="100"
              data-aos-duration="500"
            />
          </Grid>
          <Grid item xs={12} md={5}>
            <Typography
              variant="h3"
              data-aos="zoom-in"
              data-aos-delay="150"
              data-aos-duration="500"
              className="!mb-[1rem] js-hoverable-element"
            >
              {t("title3")}
            </Typography>
            <Typography
              data-aos="zoom-in"
              data-aos-delay="200"
              data-aos-duration="500"
              className="js-hoverable-element"
            >
              {t("texto3")}
            </Typography>
          </Grid>
        </Grid>

        {/* galería de imagenes  1*/}
        <GaleriaImg images={[img9, img15, img16, img14, img10, img6]} />

        {/* <!-- SERVICIOS --> */}
        <div
          className="bg-village w-full flex justify-center py-24"
          id="servicios"
        >
          <Grid
            container
            maxWidth={"xl"}
            justifyContent={"center"}
            className="py-12 px-4 xl:px-0"
            spacing={5}
          >
            <Grid item xs={12} className="text-center">
              <Typography
                variant="h3"
                className="!mb-4 js-hoverable-element"
                data-aos="zoom-in"
                data-aos-delay="100"
                data-aos-duration="500"
              >
                {t("servicios")}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} lg={5}>
              <Paper
                elevation={6}
                data-aos="zoom-in"
                data-aos-delay="100"
                data-aos-duration="500"
              >
                <img src={img7} alt="El bar" className="w-full rounded-t-md" />
                <div className="flex justify-center py-8">
                  <List className="js-hoverable-element">
                    <ListItem>
                      <ListItemText
                        primary={t("incluidos")}
                        className="!text-[25px] md:!text-[28px] !font-bold"
                      />
                    </ListItem>
                    <ListItem>
                      <AirportShuttleTwoToneIcon className="mr-3 text-gold !w-[1.7rem]" />
                      <ListItemText secondary={t("trasladoAeropuerto")} />
                    </ListItem>
                    <Divider component="li" className="!my-2" />
                    <ListItem>
                      <RoomServiceTwoToneIcon className="mr-3 text-gold !w-[1.7rem]" />
                      <ListItemText secondary={t("conserge")} />
                    </ListItem>
                    <Divider component="li" className="!my-2" />
                    <ListItem>
                      <SafetyCheckTwoToneIcon className="mr-3 text-gold !w-[1.7rem]" />
                      <ListItemText secondary={t("seguridad")} />
                    </ListItem>
                    <Divider component="li" className="!my-2" />
                    <ListItem>
                      <SettingsRemoteTwoToneIcon className="mr-3 text-gold !w-[1.7rem]" />
                      <ListItemText secondary={t("wifi")} />
                    </ListItem>
                    <Divider component="li" className="!my-2" />
                    <ListItem>
                      <LocalBarTwoToneIcon className="mr-3 text-gold !w-[1.7rem]" />
                      <ListItemText secondary={t("bar")} />
                    </ListItem>
                    <Divider component="li" className="!my-2" />
                    <ListItem>
                      <Restaurant className="mr-3 text-gold !w-[1.7rem]" />
                      <ListItemText secondary={t("asado")} />
                    </ListItem>
                    <Divider component="li" className="!my-2" />
                    <ListItem>
                      <CleaningServicesTwoToneIcon className="mr-3 text-gold !w-[1.7rem]" />
                      <ListItemText secondary={t("limpieza")} />
                    </ListItem>
                    <Divider component="li" className="!my-2" />
                    <ListItem>
                      <DryCleaningTwoToneIcon className="mr-3 text-gold !w-[1.7rem]" />
                      <ListItemText secondary={t("ropablanca")} />
                    </ListItem>
                    <Divider component="li" className="!my-2" />
                    <ListItem>
                      <DirectionsCarFilledTwoToneIcon className="mr-3 text-gold !w-[1.7rem]" />
                      <ListItemText secondary={t("estacionamiento")} />
                    </ListItem>
                  </List>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} lg={5}>
              <Paper
                elevation={6}
                data-aos="zoom-in"
                data-aos-delay="200"
                data-aos-duration="500"
              >
                <img src={img8} alt="El bar" className="w-full rounded-t-md" />
                <div className="flex justify-center py-8">
                  <List className="js-hoverable-element">
                    <ListItem>
                      <ListItemText
                        primary={t("adicionales")}
                        className="!text-[25px] md:!text-[28px] !font-bold"
                      />
                    </ListItem>
                    <ListItem>
                      <AirportShuttleTwoToneIcon className="mr-3 text-gold !w-[1.7rem]" />
                      <ListItemText secondary={t("traslados")} />
                    </ListItem>
                    <Divider component="li" className="!my-2" />
                    <ListItem>
                      <TourTwoToneIcon className="mr-3 text-gold !w-[1.7rem]" />
                      <ListItemText secondary={t("guiaTuristica")} />
                    </ListItem>
                    <Divider component="li" className="!my-2" />
                    <ListItem>
                      <StadiumTwoToneIcon className="mr-3 text-gold !w-[1.7rem]" />
                      <ListItemText secondary={t("estadios")} />
                    </ListItem>
                    <Divider component="li" className="!my-2" />
                    <ListItem>
                      <LunchDiningTwoToneIcon className="mr-3 text-gold !w-[1.7rem]" />
                      <ListItemText secondary={t("gastro")} />
                    </ListItem>
                    <Divider component="li" className="!my-2" />
                    <ListItem>
                      <TheaterComedyTwoToneIcon className="mr-3 text-gold !w-[1.7rem]" />
                      <ListItemText secondary={t("tours")} />
                    </ListItem>
                  </List>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </div>

        {/*  LLAMADA A LA ACCIÓN   */}
        {/*  <div className="bg-action mix-blend-multiply w-full mb-12">
          <div className="w-full pt-64 pb-16 bg-black bg-opacity-10 flex flex-col justify-center items-center">
            <Grid container justifyContent={"center"}>
              <Grid item xs={12} md={7} className="js-hoverable-element">
                <div className="p-6 md:p-10 bg-white bg-opacity-25 rounded-sm backdrop-blur-lg flex flex-col items-center">
                  <Typography variant="h3">
                    Diego, su casa, tu hospedaje
                  </Typography>
                  <Button
                    variant="contained"
                    className="!text-[16px] bg-primary !hover:bg-gray-700 !font-title px-4 !lowercase !mt-6 "
                    onClick={handleReservaClick}
                  >
                    hacé tu reserva
                  </Button>
                </div>
              </Grid>
            </Grid>
          </div>
        </div> */}

        {/* galería de imagenes  2*/}
        <GaleriaImg images={[img2, img3, img4, img5, img13, img1]} />
      </main>
      <FooterDiego />
    </div>
  );
}

export default App;
