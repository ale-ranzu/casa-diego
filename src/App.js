import React, { useEffect, useRef } from "react";
import {
  Divider,
  Grid,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  Paper,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Nav from "./components/nav";
import FooterDiego from "./components/footer";
import Marquee from "./components/marqueeSection";
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

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  const reservarRef = useRef(null);
  const handleReservaClick = () => {
    if (reservarRef.current) {
      reservarRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { id: "reservar", text: "Reservar", targetId: "reservar" },  
    { id: "descripcion", text: "Descripción", targetId: "descripcion" },
    { id: "servicios", text: "Servicios", targetId: "servicios" },
    { id: "contacto", text: "Contacto", targetId: "contacto" },
    {
      id: "italiano",
      text: "Italiano",
      targetId: "italiano",
      type: "language",
      svg: italiano,
    },
    {
      id: "espaniol",
      text: "Español",
      targetId: "espaniol",
      type: "language",
      svg: espaniol,
    },
    {
      id: "english",
      text: "English",
      targetId: "english",
      type: "language",
      svg: ingles,
    },
  ];

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
            Reservá tu estadía exclusiva en la mítica casa de Maradona
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
              Un alojamiento único en el mundo.
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
              Ahora podés hospedarte en la mítica casa de Maradona y su familia,
              el hogar que Diego eligió como punto de encuentro con sus
              familiares y amigos, que cuenta con capacidad para 12 personas.
            </Typography>
          </Grid>
        </Grid>

        {/* <!-- RESERVA --> */}
        <Grid container maxWidth={"xl"} id="reservar">
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
          <Marquee ref={reservarRef} texto="Reservá ahora">
            <Grid container spacing={3} alignItems={"center"}>
              <Grid item xs={12} sm={6} lg={4}>
                <Typography className="!text-[20px] js-hoverable-element">
                  Check In
                </Typography>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker className="js-hoverable-element w-full" />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12} sm={6} lg={4}>
                <Typography className="!text-[20px] js-hoverable-element ">
                  Check Out
                </Typography>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker className="js-hoverable-element w-full" />
                </LocalizationProvider>
              </Grid>
              <Grid
                item
                xs={12}
                md={4}
                className="!mt-[1.5rem] text-right md:text-center"
              >
                <Button
                  variant="contained"
                  className="!text-[16px] bg-primary !hover:bg-gray-700 !font-light px-4 !lowercase js-hoverable-element"
                >
                  Buscar
                </Button>
              </Grid>
            </Grid>
          </Marquee>
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
              Toda la casa para vos y tus amigos
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
              <Icon name="iconCasa" text="700 m2 cubiertos" />
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
              <Icon name="iconJardin" text="500 m2 descubiertos" />
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
              <Icon name="iconPisos" text="3 pisos" />
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
              <Icon name="iconHabitaciones" text="6 habitaciones" />
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
              <Icon name="iconLiving" text="Living" />
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
              <Icon name="iconComedor" text="Comedor" />
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
              <Icon name="iconCocina" text="Cocina" />
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
              <Icon name="iconBanio" text="4 Baños" />
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
              <Icon name="iconCesped" text="Jardín con césped sintético" />
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
              <Icon name="iconQuincho" text="Quincho" />
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
              <Icon name="iconParrilla" text="Parrilla" />
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
              <Icon name="iconPileta" text="Pileta climatizada" />
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
              <Icon name="iconCapacidad" text="Capacidad para 10-15 personas" />
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
              <Icon name="iconMobiliario" text="Mobiliario original" />
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
              <Icon name="iconCopa" text="Recuerdos únicos de los Maradona" />
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
              Un patrimonio histórico de Argentina
            </Typography>
            <Typography
              data-aos="zoom-in"
              data-aos-delay="200"
              data-aos-duration="500"
              className="js-hoverable-element"
            >
              En 1981, Diego es transferido de Argentinos Juniors a Boca Juniors
              y cumple el sueño de regalarle una casa a sus padres. Se
              transformó en el hogar de la familia donde vivió con Don Diego,
              Doña Tota y sus hermanos. Hoy, tras quedar a un paso de ser
              demolida, la casa fue recuperada y renovada manteniendo su
              espíritu y estructura original y está lista para recibir a
              fanáticos de todo el mundo que quieran venir a hospedarse en su
              casa y vivir una experiencia única.
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
              Hospedate en Casa Diego en forma privada y exclusiva
            </Typography>
            <Typography
              data-aos="zoom-in"
              data-aos-delay="200"
              data-aos-duration="500"
              className="js-hoverable-element"
            >
              Entrá, cerrá la puerta y disfrutá con total privacidad. <br></br>
              La vivienda se reserva completa, con capacidad para hasta 12
              huéspedes y con un servicio exclusivo.
            </Typography>
          </Grid>
        </Grid>

         {/* galería de imagenes  1*/}
        <GaleriaImg images={[img9, img15, img16, img14, img10, img6]} />

        {/* <!-- SERVICIOS --> */}
        <div className="bg-village w-full flex justify-center py-24" id="servicios">
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
                Servicios
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
                        primary="Incluídos"
                        className="!text-[25px] md:!text-[28px] !font-bold"
                      />
                    </ListItem>
                    <ListItem>
                      <AirportShuttleTwoToneIcon className="mr-3 text-gold !w-[1.7rem]" />
                      <ListItemText secondary="Traslado desde el aeropuerto" />
                    </ListItem>
                    <Divider component="li" className="!my-2" />
                    <ListItem>
                      <RoomServiceTwoToneIcon className="mr-3 text-gold !w-[1.7rem]" />
                      <ListItemText secondary="Conserjería las 24 horas" />
                    </ListItem>
                    <Divider component="li" className="!my-2" />
                    <ListItem>
                      <SafetyCheckTwoToneIcon className="mr-3 text-gold !w-[1.7rem]" />
                      <ListItemText secondary="Seguridad 24 horas" />
                    </ListItem>
                    <Divider component="li" className="!my-2" />
                    <ListItem>
                      <SettingsRemoteTwoToneIcon className="mr-3 text-gold !w-[1.7rem]" />
                      <ListItemText secondary="Internet de alta velocidad" />
                    </ListItem>
                    <Divider component="li" className="!my-2" />
                    <ListItem>
                      <LocalBarTwoToneIcon className="mr-3 text-gold !w-[1.7rem]" />
                      <ListItemText secondary="Bar" />
                    </ListItem>
                    <Divider component="li" className="!my-2" />
                    <ListItem>
                      <Restaurant className="mr-3 text-gold !w-[1.7rem]" />
                      <ListItemText secondary="Asado" />
                    </ListItem>
                    <Divider component="li" className="!my-2" />
                    <ListItem>
                      <CleaningServicesTwoToneIcon className="mr-3 text-gold !w-[1.7rem]" />
                      <ListItemText secondary="Limpieza" />
                    </ListItem>
                    <Divider component="li" className="!my-2" />
                    <ListItem>
                      <DryCleaningTwoToneIcon className="mr-3 text-gold !w-[1.7rem]" />
                      <ListItemText secondary="Ropa blanca" />
                    </ListItem>
                    <Divider component="li" className="!my-2" />
                    <ListItem>
                      <DirectionsCarFilledTwoToneIcon className="mr-3 text-gold !w-[1.7rem]" />
                      <ListItemText secondary="Estacionamiento" />
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
                        primary="Adicionales"
                        className="!text-[25px] md:!text-[28px] !font-bold"
                      />
                    </ListItem>
                    <ListItem>
                      <AirportShuttleTwoToneIcon className="mr-3 text-gold !w-[1.7rem]" />
                      <ListItemText secondary="Traslados" />
                    </ListItem>
                    <Divider component="li" className="!my-2" />
                    <ListItem>
                      <TourTwoToneIcon className="mr-3 text-gold !w-[1.7rem]" />
                      <ListItemText secondary="Visitas Guiadas" />
                    </ListItem>
                    <Divider component="li" className="!my-2" />
                    <ListItem>
                      <StadiumTwoToneIcon className="mr-3 text-gold !w-[1.7rem]" />
                      <ListItemText secondary="Asistencia a Estadios" />
                    </ListItem>
                    <Divider component="li" className="!my-2" />
                    <ListItem>
                      <LunchDiningTwoToneIcon className="mr-3 text-gold !w-[1.7rem]" />
                      <ListItemText secondary="Experiencias Gastronómicas" />
                    </ListItem>
                    <Divider component="li" className="!my-2" />
                    <ListItem>
                      <TheaterComedyTwoToneIcon className="mr-3 text-gold !w-[1.7rem]" />
                      <ListItemText secondary="Tours" />
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

        {/*  CONTACTO  */}
        <Grid
          container
          maxWidth={"xl"}
          justifyContent={"center"}
          id="contacto"
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
              Contactanos
            </Typography>
            <Typography
              data-aos="zoom-in"
              data-aos-delay="200"
              data-aos-duration="500"
              className="js-hoverable-element pb-8"
            >
              Cualquier consulta que tengas, no dudes en escribirnos,
              responderemos a la brevedad.
            </Typography>
          </Grid>
          <ContactForm />
        </Grid>

        {/* galería de imagenes  2*/}
        <GaleriaImg images={[img2, img3, img4, img5, img13, img1]}/>
        
      </main>
      <FooterDiego />
    </div>
  );
}

export default App;
