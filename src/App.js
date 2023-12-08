import Nav from "./components/nav";
import "./App.css";
import { Divider, Grid, Typography } from "@mui/material";
import casaDiegoLogoTipo from "./assets/casa-diego-tipo.svg";

function App() {
  return (
    <div className="App">
      <Nav />
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
          <Grid item xs={12} md={7}>
            <Typography
              variant="h1"
              className="animate-fade-right animate-ease-in will-change-scroll"
            >
              Un alojamiento único en el mundo.
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={5}
            className="animate-fade-left animate-ease-in will-change-scroll"
          >
            <Typography>
              Ahora podés hospedarte en la mítica casa de Maradona y su familia,
              el hogar que Diego eligió como punto de encuentro con sus
              familiares y amigos, que cuenta con capacidad para 12 personas.
            </Typography>
          </Grid>
        </Grid>
        <div className="relative flex overflow-x-hidden w-[99vw]">
          <div className="py-12 animate-marquee whitespace-nowrap">
            <Typography className="!text-[90px] md:!text-[170px] lg:!text-[270px] !font-[900]">
              RESERVÁ AHORA
            </Typography>
          </div>
          <div class="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
            <Typography className="!text-[90px] md:!text-[170px] lg:!text-[270px] !font-[900] px-10">
              RESERVÁ AHORA
            </Typography>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
