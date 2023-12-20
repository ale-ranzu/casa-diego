import React, { useState } from "react";
import emailjs from "emailjs-com";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleReservaClick = async (e) => {
    e.preventDefault();

    if (!isEmailValid(formData.email)) {
      alert("Por favor, ingresa una dirección de correo electrónico válida.");
      return;
    }

    if (!formData.name || !formData.email || !formData.message) {
      alert("Por favor, completa todos los campos obligatorios.");
      return;
    }

    const btn = document.getElementById("button");
    btn.value = "Enviando...";

    try {
      const serviceID = "testeo_gmail";
      const templateID = "template_hv2f7vs";

      await emailjs.sendForm(serviceID, templateID, e.target).then(
        () => {
          btn.value = "Enviar la consulta";
          alert("Hemos recibido tu consulta, en breve nos contactaremos con vos.");
          setFormData({
            name: "",
            phone: "",
            email: "",
            message: "",
          });
        },
        (err) => {
          btn.value = "Enviar la consulta";
          alert(JSON.stringify(err));
        }
      );
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    }
  };

  return (
    <form id="form" onSubmit={handleReservaClick}>
      <Grid container rowGap={2} justifyContent={"center"}>
        <Grid item xs={12} md={10}>
          <TextField
            label="Nombre y Apellido *"
            variant="outlined"
            fullWidth
            name="name"
            value={formData.name}
            onChange={handleChange}
            size="small"
          />
        </Grid>
        <Grid item xs={12} md={10}>
          <TextField
            label="Teléfono *"
            variant="outlined"
            fullWidth
            name="phone"
            type="number"
            value={formData.phone}
            onChange={handleChange}
            size="small"
          />
        </Grid>
        <Grid item xs={12} md={10}>
          <TextField
            label="Email *"
            variant="outlined"
            fullWidth
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            size="small"
          />
        </Grid>
        <Grid item xs={12} md={10}>
          <TextField
            label="Mensaje *"
            variant="outlined"
            fullWidth
            name="message"
            multiline
            rows={4}
            value={formData.message}
            onChange={handleChange}
            size="small"
          />
        </Grid>
        <Grid item xs={12} md={10} className="text-right">
          <Button
            type="submit"
            id="button"
            variant="contained"
            className="!text-[16px] bg-primary !hover:bg-gray-700 !font-light px-4 !lowercase !mt-6 js-hoverable-element"
          >
            Envíanos tu consulta
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default ContactForm;
