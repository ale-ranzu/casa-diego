// Icon.js
import React from "react";
import iconCasa from "../assets/casa.svg";
import iconBanio from "../assets/banio.svg";
import iconCocina from "../assets/cocina.svg";
import iconCapacidad from "../assets/capacidad.svg";
import iconCesped from "../assets/cesped.svg";
import iconComedor from "../assets/comedor.svg";
import iconHabitaciones from "../assets/habitaciones.svg";
import iconJardin from "../assets/jardin.svg";
import iconLiving from "../assets/living.svg";
import iconPileta from "../assets/pileta.svg";
import iconParrilla from "../assets/parrilla.svg";
import iconPisos from "../assets/pisos.svg";
import iconMobiliario from "../assets/mobiliario.svg";
import iconQuincho from "../assets/quincho.svg";
import iconCopa from "../assets/copa.svg";

const Icon = ({ name, text = "", ...props }) => {
  const icons = {
    iconCasa: <img src={iconCasa} />,
    iconBanio: <img src={iconBanio} />,
    iconCocina: <img src={iconCocina} />,
    iconCapacidad: <img src={iconCapacidad} />,
    iconCesped: <img src={iconCesped} />,
    iconComedor: <img src={iconComedor} />,
    iconHabitaciones: <img src={iconHabitaciones} />,
    iconJardin: <img src={iconJardin} />,
    iconLiving: <img src={iconLiving} />,
    iconPileta: <img src={iconPileta} />,
    iconParrilla: <img src={iconParrilla} />,
    iconPisos: <img src={iconPisos} />,
    iconMobiliario: <img src={iconMobiliario} />,
    iconQuincho: <img src={iconQuincho} />,
    iconCopa: <img src={iconCopa} />,
  };

  return icons[name] ? (
    <div className="h-48 md:h-52 flex flex-col items-center justify-center">
      <span
        {...props}
        className="w-[60px] h-[80px] md:w-[80px] md:h-[100px] flex justify-center items-stretch js-hoverable-element brightness-200"
      >
        {icons[name]}       
      </span>
      {text && (
          <span className="text-center text-white text-[21px] font-[200] leading-6 h-[50px] js-hoverable-element">
            {text}
          </span>
        )}
    </div>
  ) : null;
};

export default Icon;
