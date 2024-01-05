import React, { useEffect,useState } from "react";
import emailjs from "emailjs-com";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AOS from "aos";

function ContactForm() {
  useEffect(() => {
    AOS.init();
  }, []);

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
          alert(
            "Hemos recibido tu consulta, en breve nos contactaremos con vos."
          );
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
      <Grid container spacing={2} maxWidth={"lg"} className="px-4 xl:px-0">
        <Grid
          item
          container
          xs={12}
          md={6}
          maxWidth={"lg"}
          className="!pt-12"
          rowSpacing={3}
        >
          <Grid item xs={12}>
            <TextField
              label="Nombre y Apellido *"
              variant="standard"
              fullWidth
              name="name"
              value={formData.name}
              onChange={handleChange}
              size="small"
              className="bg-white bg-opacity-20 js-hoverable-element"
              data-aos="zoom-in"
              data-aos-delay="50"
              data-aos-duration="500"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Teléfono *"
              variant="standard"
              fullWidth
              name="phone"
              type="number"
              value={formData.phone}
              onChange={handleChange}
              size="small"
              className="bg-white bg-opacity-20 js-hoverable-element"
              data-aos="zoom-in"
              data-aos-delay="150"
              data-aos-duration="500"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email *"
              variant="standard"
              fullWidth
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              size="small"
              className="bg-white bg-opacity-20 js-hoverable-element"
              data-aos="zoom-in"
              data-aos-delay="200"
              data-aos-duration="500"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Mensaje *"
              variant="standard"
              fullWidth
              name="message"
              multiline
              rows={4}
              value={formData.message}
              onChange={handleChange}
              size="small"
              className="bg-white bg-opacity-20 js-hoverable-element"
              data-aos="zoom-in"
              data-aos-delay="250"
              data-aos-duration="500"
            />
          </Grid>
          <Grid item xs={12} className="text-center">
            <Button
              type="submit"
              id="button"
              variant="contained"
              className="!text-[16px] bg-primary !hover:bg-gray-700 !font-light px-4 !lowercase !mt-6 js-hoverable-element"
              data-aos="zoom-in"
              data-aos-delay="300"
              data-aos-duration="500"
            >
              Envíanos tu consulta
            </Button>
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          className="!pt-12 js-hoverable-element"
          data-aos="zoom-in"
          data-aos-delay="50"
          data-aos-duration="500"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1641.9572308177735!2d-58.51833459706597!3d-34.606324446725374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb7ce2876574f%3A0x5f330af22cd97bf6!2sJos%C3%A9%20Luis%20Cantilo%204575%2C%20C1419%20Villa%20Devoto%2C%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1702559007816!5m2!1ses-419!2sar"
            width="100%"
            height="350"
            allowfullscreen="true"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </Grid>
      </Grid>
    </form>
  );
}

export default ContactForm;
