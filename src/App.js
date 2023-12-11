import React from "react";
import { Divider, Grid, Typography, Button } from "@mui/material";
import casaDiegoLogoTipo from "./assets/casa-diego-tipo.svg";
import Nav from "./components/nav";
import "./App.css";
import AOS from "aos";
import Icon from './components/icon';

function App() {
  AOS.init();

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
      <Nav links={navLinks} />
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
              className="animate-fade-right animate-ease-in will-change-scroll"
              data-aos="fade-right"
            >
              Un alojamiento único en el mundo.
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            lg={5}
            className="delay-[300ms] duration-[600ms] taos:translate-x-[200px] taos:opacity-0"
            data-taos-offset="400"
          >
            <Typography>
              Ahora podés hospedarte en la mítica casa de Maradona y su familia,
              el hogar que Diego eligió como punto de encuentro con sus
              familiares y amigos, que cuenta con capacidad para 12 personas.
            </Typography>
          </Grid>
        </Grid>
        <div
          className="relative flex overflow-hidden w-[99vw] justify-center pb-56"
          id="reservar"
        >
          <div className="py-12 animate-marquee whitespace-nowrap">
            <Typography className="!text-[130px] md:!text-[170px] lg:!text-[270px] !font-[900] text-gray">
              RESERVÁ AHORA
            </Typography>
          </div>
          <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap px-3">
            <Typography className="!text-[130px] md:!text-[170px] lg:!text-[270px] !font-[900]  text-gray">
              RESERVÁ AHORA
            </Typography>
          </div>
          <Grid
            container
            maxWidth={"xl"}
            justifyContent={"center"}
            className="absolute top-[10.5rem] md:top-[12.5rem] lg:top-[19rem]"
          >
            <Grid item xs={10} md={9} lg={8} xl={7}>
              <div className=" p-20 bg-gray-light bg-opacity-40 rounded-xl backdrop-blur-lg flex justify-around items-end">
                <div className="w-1/3">
                  <Typography className="!text-[20px]">Check In</Typography>
                  <input
                    type="date"
                    label="Check In"
                    className="px-4 !text-[18px] w-full"
                  />
                </div>
                <div className="w-1/3">
                  <Typography className="!text-[20px]">Check In</Typography>
                  <input
                    type="date"
                    label="Check Out"
                    className="px-2 !text-[18px] w-full"
                  />
                </div>
                <Button
                  variant="contained"
                  className="!text-[16px] !hover:bg-gray-800 !font-light px-4"
                >
                  Buscar
                </Button>
              </div>
            </Grid>
          </Grid>
        </div>
        <Grid container spacing={5} maxWidth={"xl"} justifyContent={"center"}>
          <Grid item xs={12}>
            <Typography variant="h3" className="text-center pb-6">
              Toda la casa para vos y tus amigos
            </Typography>            
            <div className="bg-text rounded-2xl w-full p-8">
              <Grid container justifyContent={'center'}>
                <Grid item xs={6} md={2} sx={{ marginLeft: { md: 2 } }} className="text-center mx-auto">
                  <Icon name="iconCasa" text="Texto de ejemplo" />
                </Grid>
                <Grid item xs={6} md={2} className="text-center mx-auto">
                  <Icon name="iconCasa" text="Texto de ejemplo" />
                </Grid>
                <Grid item xs={6} md={2} className="text-center mx-auto">
                  <Icon name="iconCasa" text="Texto de ejemplo" />
                </Grid>
                <Grid item xs={6} md={2} className="text-center mx-auto">
                  <Icon name="iconCasa" text="Texto de ejemplo" />
                </Grid>
                <Grid item xs={6} md={2} className="text-center mx-auto">
                  <Icon name="iconCasa" text="Texto de ejemplo" />
                </Grid>
             
                <Grid item xs={6} md={2} sx={{ marginLeft: { md: 2 } }} className="text-center mx-auto">
                  <Icon name="iconCasa" text="Texto de ejemplo" />
                </Grid>
                <Grid item xs={6} md={2} className="text-center mx-auto">
                  <Icon name="iconCasa" text="Texto de ejemplo" />
                </Grid>
                <Grid item xs={6} md={2} className="text-center mx-auto">
                  <Icon name="iconCasa" text="Texto de ejemplo" />
                </Grid>
                <Grid item xs={6} md={2} className="text-center mx-auto">
                  <Icon name="iconCasa" text="Texto de ejemplo" />
                </Grid>
                <Grid item xs={6} md={2} className="text-center mx-auto">
                  <Icon name="iconCasa" text="Texto de ejemplo" />
                </Grid>

                <Grid item xs={6} md={2} mdOffset={1} className="text-center mx-auto">
                  <Icon name="iconCasa" text="Texto de ejemplo" />
                </Grid>
                <Grid item xs={6} md={2} className="text-center mx-auto">
                  <Icon name="iconCasa" text="Texto de ejemplo" />
                </Grid>
                <Grid item xs={6} md={2} className="text-center mx-auto">
                  <Icon name="iconCasa" text="Texto de ejemplo" />
                </Grid>
                <Grid item xs={6} md={2} className="text-center mx-auto">
                  <Icon name="iconCasa" text="Texto de ejemplo" />
                </Grid>
                <Grid item xs={6} md={2} className="text-center mx-auto">
                  <Icon name="iconCasa" text="Texto de ejemplo" />
                </Grid>
              </Grid>
            </div>            
          </Grid>
        </Grid>
      </main>
    </div>
  );
}

export default App;
