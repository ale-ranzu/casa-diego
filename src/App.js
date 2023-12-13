import React, { useEffect, useRef } from "react";
import { Divider, Grid, Typography, Button, TextField } from "@mui/material";
import casaDiegoLogoTipo from "./assets/casa-diego-tipo.svg";
import Nav from "./components/nav";
import FooterDiego from "./components/footer";
import Marquee from "./components/marqueeSection";
import "./App.css";
import AOS from "aos";
import Icon from "./components/icon";
import "./styles.scss";
import img1 from "./assets/diego_y_familia_2.jpg";
import img2 from "./assets/diego2.jpg";
import img3 from "./assets/diego_y_periodista.jpg";
import img4 from "./assets/diego_casa.jpg";
import img5 from "./assets/diego_tota.jpg";
import img6 from "./assets/diego_y_familia_1.jpg";
import img7 from "./assets/diego_y_familia_3.jpg";
import img8 from "./assets/diego.jpg";

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
    { id: "contacto", text: "Contacto", targetId: "contacto" },
    {
      id: "portugues",
      text: "Portugués",
      targetId: "portugues",
      type: "language",
    },
    { id: "espaniol", text: "Español", targetId: "espaniol", type: "language" },
    { id: "ingles", text: "Inglés", targetId: "ingles", type: "language" },
  ];

  return (
    <div className="App">
      {/* <!-- NAV--> */}
      <Nav links={navLinks} />

      {/* <!-- INICIO --> */}
      <div className="bg-inicio -mt-[85px] h-[100dvh] mix-blend-multiply">
        <div className="w-full h-[100dvh] bg-black bg-opacity-50 flex flex-col justify-center items-center">
          <img
            className="max-w-[310px] sm:max-w-[500px] lg:max-w-[740px] animate-fade-up animate-ease-in-out"
            src={casaDiegoLogoTipo}
            alt="Logo"
          />
          <Divider className="!border-white min-w-[40%] !mt-[65px] !mb-[50px] animate-fade-up animate-delay-100 animate-ease-in-out" />
          <Typography
            variant="h3"
            className="text-white text-center animate-fade-up animate-delay-200 animate-ease-in-out w-4/5"
          >
            Reservá tu estadía exclusiva en la mítica casa de Maradona
          </Typography>
        </div>
      </div>
      <main className="flex flex-col items-center py-6">
        {/* <!-- TEXTO 1 --> */}
        <Grid
          container
          spacing={5}
          maxWidth={"xl"}
          justifyContent={"center"}
          alignItems={"center"}
          className="pt-16 pb-32 lg:pt-32 lg:pb-60 px-5 lg:px-0"
        >
          <Grid item xs={12} lg={7}>
            <Typography
              variant="h1"
              data-aos="fade-up-right"
              data-aos-delay="100"
              data-aos-duration="500"
            >
              Un alojamiento único en el mundo.
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            lg={5}
            data-aos="fade-up-left"
            data-aos-delay="200"
            data-aos-duration="500"
          >
            <Typography>
              Ahora podés hospedarte en la mítica casa de Maradona y su familia,
              el hogar que Diego eligió como punto de encuentro con sus
              familiares y amigos, que cuenta con capacidad para 12 personas.
            </Typography>
          </Grid>
        </Grid>

        {/* <!-- RESERVA --> */}
        <Marquee id="reservar" ref={reservarRef} texto="RESERVÁ AHORA">
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Typography className="!text-[20px]">Check In</Typography>
              <input
                type="date"
                label="Check In"
                className="px-2 !text-[18px] w-full"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography className="!text-[20px]">Check Out</Typography>
              <input
                type="date"
                label="Check Out"
                className="px-2 !text-[18px] w-full"
              />
            </Grid>
            <Grid item xs={12} md={4} className="!mt-[1.5rem]">
              <Button
                variant="contained"
                className="!text-[16px] bg-primary !hover:bg-gray-700 !font-light px-4 !lowercase"
              >
                Buscar
              </Button>
            </Grid>
          </Grid>
        </Marquee>

        {/* <!-- ICONOS COMODIDADES --> */}
        <Grid
          container
          spacing={5}
          maxWidth={"xl"}
          justifyContent={"center"}
          className="px-5 lg:px-0"
        >
          <Grid item xs={12}>
            <Typography
              variant="h3"
              className="text-center pb-8"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="500"
            >
              Toda la casa para vos y tus amigos
            </Typography>
            <div className="bg-text rounded-2xl w-full py-32">
              <Grid
                container
                justifyContent={"center"}
              >
                <Grid
                  item
                  xs={6}
                  md={2}
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
                  md={2}
                  className="text-center mx-auto py-3"
                  data-aos="fade-up"
                  data-aos-delay="150"
                  data-aos-duration="500"
                >
                  <Icon name="iconJardin" text="500 m2 descubiertos" />
                </Grid>
                <Grid
                  item
                  xs={6}
                  md={2}
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
                  md={2}
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
                  md={2}
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
                  md={2}
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
                  md={2}
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
                  md={2}
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
                  md={2}
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
                  md={2}
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
                  md={2}
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
                  md={2}
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
                  md={2}
                  className="text-center mx-auto py-3"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="500"
                >
                  <Icon
                    name="iconCapacidad"
                    text="Capacidad para 10-15 personas"
                  />
                </Grid>
                <Grid
                  item
                  xs={6}
                  md={2}
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
                  md={2}
                  className="text-center mx-auto py-3"
                  data-aos="fade-up"
                  data-aos-delay="400"
                  data-aos-duration="500"
                >
                  <Icon
                    name="iconCopa"
                    text="Recuerdos únicos de los Maradona"
                  />
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>

        {/* <!-- IMAGENES Y TEXTO 1 --> */}
        <Grid
          container
          spacing={2}
          maxWidth={"xl"}
          justifyContent={"center"}
        >
          <Grid item xs={10} md={4}>
            <img
              src={img1}
              alt="Diego, la Tota, Claudia y Giannina"
              className="img-zoom w-full"
            />
          </Grid>
          <Grid item xs={10} md={4}>
            <img
              src={img2}
              alt="Diego en su casa haciendo un asado"
              className="img-zoom w-full md:mt-36"
            />
          </Grid>
          <Grid item xs={10} md={7} className="!pt-[4rem] md:!-ml-[7.5rem] ">
            <Typography
              variant="h3"
              className="!mb-[1rem]"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="500"
            >
              Un patrimonio histórico de Argentina
            </Typography>
            <Typography
              data-aos="fade-up"
              data-aos-delay="150"
              data-aos-duration="500"
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
        </Grid>

        {/* <!-- IMAGENES Y TEXTO 2 --> */}
        <Grid
          container
          spacing={2}
          maxWidth={"xl"}
          justifyContent={"center"}
          className="pt-32"
        >
          <Grid item xs={10} md={4}>
            <img
              src={img3}
              alt="Diego dando una nota en su casa"
              className="img-zoom w-full"
            />
            <img
              src={img4}
              alt="Diego dando una nota en su casa"
              className="img-zoom w-full lg:w-[80%] pt-4 md:float-right"
            />
          </Grid>
          <Grid item xs={10} md={4}>
            <img
              src={img5}
              alt="Diego y la Tota tomando mate"
              className="img-zoom w-full md:mt-12"
            />
            <img
              src={img6}
              alt="Diego dando una nota en su casa"
              className="img-zoom w-full lg:w-[80%] pt-4"
            />
          </Grid>
          <Grid item xs={10} md={6} className="!pt-[4rem] md:!-ml-[3rem]">
            <Typography
              variant="h3"
              className="!mb-[1rem]"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="500"
            >
              Hospedate en Casa Diego en forma privada y exclusiva
            </Typography>
            <Typography
              data-aos="fade-up"
              data-aos-delay="150"
              data-aos-duration="500"
            >
              Entrá, cerrá la puerta y disfrutá con total privacidad. La
              vivienda se reserva completa, con capacidad para hasta 12
              huéspedes y con un servicio exclusivo.
            </Typography>
          </Grid>
        </Grid>

        {/* <!-- IMAGENES DIEGO --> */}
        <Grid
          container
          spacing={2}
          maxWidth={"xl"}
          justifyContent={"center"}
          className="pt-32"
        >
          <Grid item xs={10} md={4}>
            <img
              src={img7}
              alt="Diego y sus padres"
              className="img-zoom w-full"
            />
          </Grid>
          <Grid item xs={10} md={4}>
            <img
              src={img8}
              alt="Diego en la puerta de entrada a su casa"
              className="img-zoom w-full md:mt-12"
            />
          </Grid>
        </Grid>

        {/* <!-- SERVICIOS --> */}
        <Marquee texto="SERVICIOS">
          <Grid container spacing={3}>
            <Grid item xs={12} md={10}>
              <Typography className="!text-[23px] lg:!text-[28px] !font-bold">
                Conserjería <span className="!text-gray-light">| </span> Atención 24 horas <span className="!text-gray-light">| </span> Internet de alta velocidad <span className="!text-gray-light">| </span> Aire Acondicionado <span className="!text-gray-light">| </span> Seguridad 24 horas <span className="!text-gray-light">| </span> Bar <span className="!text-gray-light">| </span> Limpieza <span className="!text-gray-light">| </span> Servicio de ropa blanca <span className="!text-gray-light">| </span> Estacionamiento
              </Typography>
            </Grid>
          </Grid>
        </Marquee>

        {/*  SERVICIOS ADICIONALES   */}
        <Marquee texto="SERVICIOS ADICIONALES">
          <Grid container spacing={3}>
            <Grid item xs={12} md={10}>
              <Typography className="!text-[23px] lg:!text-[28px] !font-bold">
                Traslados <span className="!text-gray-light">| </span>Visitas Guiadas <span className="!text-gray-light">| </span> Asistencia a Estadios <span className="!text-gray-light">| </span> Experiencias Gastronómicas <span className="!text-gray-light">| </span> Tours
              </Typography>
            </Grid>
          </Grid>
        </Marquee>

        {/*  LLAMADA A LA ACCIÓN   */}
        <div className="bg-action mix-blend-multiply w-full">
          <div className="w-full pt-64 pb-16 bg-black bg-opacity-10 flex flex-col justify-center items-center">
            <Grid container justifyContent={"center"}>
              <Grid item xs={10} md={7}>
                <div className="p-6 md:p-10 bg-gray-light bg-opacity-20 rounded-xl backdrop-blur-lg flex flex-col items-center">
                  <Typography className="!text-[35px] !font-bold">
                    Diego, su casa, tu hospedaje
                  </Typography>
                  <Button
                    variant="contained"
                    className="!text-[16px] bg-primary !hover:bg-gray-700 !font-light px-4 !lowercase !mt-6"
                    onClick={handleReservaClick}
                  >
                    hacé tu reserva
                  </Button>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>

        {/*  CONTACTO  */}
        <Marquee texto="CONTACTANOS" className="relative flex overflow-hidden w-[98vw] justify-center pb-[48rem]">
          <Grid container spacing={3} justifyContent={"center"}>
            <Grid item xs={12} md={10}>
              <Typography className="mb-5">
                Cualquier consulta que tengas, no dudes en escribirnos,
                responderemos a la brevedad.
              </Typography>
            </Grid>
            <Grid item xs={12} md={10} className="mb-4">
              <TextField
                id="nombre"
                label="Nombre y Apellido"
                variant="outlined"
                size="small"
                fullWidth                
              />
            </Grid>
            <Grid item xs={12} md={10} className="mb-4">
              <TextField
                id="email"
                label="Email"
                variant="outlined"
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={10} className="mb-4">
              <TextField
                id="telefono"
                label="Teléfono"
                variant="outlined"
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={10} className="mb-4">
              <TextField
                id="outlined-multiline-static"
                label="Dejanos tu consulta"
                multiline
                fullWidth
                rows={4}
                defaultValue="Hola, quisiera saber..."
              />
            </Grid>
            <Grid item xs={12} md={10} className="text-right">
              <Button
                variant="contained"
                className="!text-[16px] bg-primary !hover:bg-gray-700 !font-light px-4 !lowercase !mt-6"
                onClick={handleReservaClick}
              >
                hacé tu reserva
              </Button>
            </Grid>
          </Grid>
        </Marquee>
      </main>
      <FooterDiego />
    </div>
  );
}

export default App;
