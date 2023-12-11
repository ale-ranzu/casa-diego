import React, { useEffect, useRef } from "react";
import { Divider, Grid, Typography, Button, TextField } from "@mui/material";
import casaDiegoLogoTipo from "./assets/casa-diego-tipo.svg";
import Nav from "./components/nav";
import FooterDiego from "./components/footer";
import "./App.css";
import AOS from "aos";
import Icon from "./components/icon";

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
          className="pt-16 pb-32 lg:pt-32 lg:pb-60 px-5"
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
        <div
          className="relative flex overflow-hidden w-[99vw] justify-center pb-80 lg:pb-56"
          id="reservar"
          ref={reservarRef}
        >
          <div className="py-12 animate-marquee whitespace-nowrap">
            <Typography className="!text-[90px] sm:!text-[130px] md:!text-[170px] lg:!text-[270px] !font-[900] text-text">
              RESERVÁ AHORA
            </Typography>
          </div>
          <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
            <Typography className="!text-[90px] sm:!text-[130px] md:!text-[170px] lg:!text-[270px] !font-[900]  text-text">
              RESERVÁ AHORA
            </Typography>
          </div>
          <Grid
            container
            maxWidth={"xl"}
            justifyContent={"center"}
            className="absolute top-[8.3rem] sm:top-[10.5rem] md:top-[12.5rem] lg:top-[19rem]"
          >
            <Grid item xs={10} md={9} lg={8} xl={7}>
              <div className="p-8 md:p-20 bg-gray-light bg-opacity-40 rounded-xl backdrop-blur-lg flex justify-around items-end">
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
              </div>
            </Grid>
          </Grid>
        </div>

        {/* <!-- ICONOS COMODIDADES --> */}
        <Grid
          container
          spacing={5}
          maxWidth={"xl"}
          justifyContent={"center"}
          className="px-5 md:px-0"
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
                className="px-5 md:px-0"
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
          className="px-5 md:px-0 pt-12"
        >
          <Grid item xs={10} md={4}>
            <img
              src="../diego_y_familia_2.jpg"
              alt="Diego, la Tota, Claudia y Giannina"
              className="img-zoom w-full"
            />
          </Grid>
          <Grid item xs={10} md={4}>
            <img
              src="../diego2.jpg"
              alt="Diego en su casa haciendo un asado"
              className="img-zoom w-full md:mt-36"
            />
          </Grid>
          <Grid item xs={10} md={7} className="!pt-[4rem] md:!-ml-[7.5rem]">
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
          className="px-5 md:px-0 pt-32"
        >
          <Grid item xs={10} md={4}>
            <img
              src="../diego_y_periodista.jpg"
              alt="Diego dando una nota en su casa"
              className="img-zoom w-full"
            />
            <img
              src="../diego_casa.jpg"
              alt="Diego dando una nota en su casa"
              className="img-zoom w-full md:w-[80%] pt-4 md:float-right"
            />
          </Grid>
          <Grid item xs={10} md={4}>
            <img
              src="../diego_tota.jpg"
              alt="Diego y la Tota tomando mate"
              className="img-zoom w-full md:mt-12"
            />
            <img
              src="../diego_y_familia_1.jpg"
              alt="Diego dando una nota en su casa"
              className="img-zoom w-full md:w-[80%] pt-4"
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
          className="px-5 md:px-0 pt-32"
        >
          <Grid item xs={10} md={4}>
            <img
              src="../diego_y_familia_3.jpg"
              alt="Diego y sus padres"
              className="img-zoom w-full"
            />
          </Grid>
          <Grid item xs={10} md={4}>
            <img
              src="../diego.jpg"
              alt="Diego en la puerta de entrada a su casa"
              className="img-zoom w-full md:mt-12"
            />
          </Grid>
        </Grid>

        {/* <!-- SERVICIOS --> */}
        <div
          className="relative flex overflow-hidden w-[99vw] justify-center pb-80 lg:pb-56"
          id="reservar"
        >
          <div className="py-12 animate-marquee whitespace-nowrap">
            <Typography className="!text-[90px] sm:!text-[130px] md:!text-[170px] lg:!text-[270px] !font-[900] text-text">
              SERVICIOS <span className="px-8">SERVICIOS</span>
            </Typography>
          </div>
          <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
            <Typography className="!text-[90px] sm:!text-[130px] md:!text-[170px] lg:!text-[270px] !font-[900]  text-text">
              SERVICIOS <span className="px-8">SERVICIOS</span>
            </Typography>
          </div>
          <Grid
            container
            maxWidth={"xl"}
            justifyContent={"center"}
            className="absolute top-[8.3rem] sm:top-[10.5rem] md:top-[12.5rem] lg:top-[19rem]"
          >
            <Grid item xs={10} md={9} lg={8} xl={7}>
              <div
                className="p-8 md:p-20 bg-gray-light bg-opacity-40 rounded-xl backdrop-blur-lg flex justify-around items-end"
                data-aos="flip-right"
                data-aos-delay="100"
                data-aos-duration="500"
              >
                <Grid container spacing={3}>
                  <Grid item xs={12} md={10}>
                    <Typography className="!text-[28px] !font-bold">
                      Conserjería | Atención 24 horas | Internet de alta
                      velocidad | Aire Acondicionado | Seguridad 24 horas | Bar
                      | Limpieza | Servicio de ropa blanca | Estacionamiento
                    </Typography>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </div>

        {/*  SERVICIOS ADICIONALES   */}
        <div
          className="relative flex overflow-hidden w-[99vw] justify-center pb-80 lg:pb-56"
          id="reservar"
        >
          <div className="py-12 animate-marquee whitespace-nowrap">
            <Typography className="!text-[90px] sm:!text-[130px] md:!text-[170px] lg:!text-[270px] !font-[900] text-text">
              SERVICIOS ADICIONALES
            </Typography>
          </div>
          <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
            <Typography className="!text-[90px] sm:!text-[130px] md:!text-[170px] lg:!text-[270px] !font-[900]  text-text">
              SERVICIOS ADICIONALES
            </Typography>
          </div>
          <Grid
            container
            maxWidth={"xl"}
            justifyContent={"center"}
            className="absolute top-[8.3rem] sm:top-[10.5rem] md:top-[12.5rem] lg:top-[19rem]"
          >
            <Grid item xs={10} md={9} lg={8} xl={7}>
              <div
                className="p-8 md:p-20 bg-gray-light bg-opacity-40 rounded-xl backdrop-blur-lg flex justify-around items-end"
                data-aos="flip-right"
                data-aos-delay="100"
                data-aos-duration="500"
              >
                <Grid container spacing={3}>
                  <Grid item xs={12} md={10}>
                    <Typography className="!text-[28px] !font-bold">
                      Traslados | Visitas Guiadas | Asistencia a Estadios |
                      Experiencias Gastronómicas | Tours
                    </Typography>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </div>

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
        <div
          className="relative flex overflow-hidden w-[99vw] justify-center h-[100dvh] md:h-[110dvh] lg:h-[120dvh]"
          id="contacto"
        >
          <div className="py-12 animate-marquee whitespace-nowrap">
            <Typography className="!text-[90px] sm:!text-[130px] md:!text-[170px] lg:!text-[270px] !font-[900] text-text">
              CONTACTANOS
            </Typography>
          </div>
          <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
            <Typography className="!text-[90px] sm:!text-[130px] md:!text-[170px] lg:!text-[270px] !font-[900]  text-text">
              CONTACTANOS
            </Typography>
          </div>
          <Grid
            container
            maxWidth={"xl"}
            justifyContent={"center"}
            className="absolute top-[8rem] sm:top-[10.5rem] md:top-[12.5rem] lg:top-[18.5rem]"
          >
            <Grid item xs={10} md={9} lg={8} xl={7}>
              <div
                className="p-8 md:p-20 bg-gray-light bg-opacity-40 rounded-xl backdrop-blur-lg flex justify-around items-end"
                data-aos="flip-right"
                data-aos-delay="100"
                data-aos-duration="500"
              >
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
                      label="Multiline"
                      multiline
                      fullWidth
                      rows={4}
                      defaultValue="Default Value"
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
              </div>
            </Grid>
          </Grid>
        </div>       
      </main>
      <FooterDiego />
    </div>
  );
}

export default App;
