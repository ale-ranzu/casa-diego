import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import Grid from "@mui/material/Grid";
import { TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import ReCAPTCHA from "react-google-recaptcha";
import AOS from "aos";
import { useTranslation } from "react-i18next";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function ContactForm() {
  useEffect(() => {
    AOS.init();
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    checkIn: "",
    checkOut: "",
    country: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [recaptchaValue, setRecaptchaValue] = useState(null);

  const { t } = useTranslation();

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

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };

  const clearMessages = () => {
    setSuccessMessage("");
    setErrorMessage("");
  };

  const handleReservaClick = async (e) => {
    e.preventDefault();

    // Limpiar mensajes de error al interactuar con el formulario nuevamente
    clearMessages();

    if (!isEmailValid(formData.email)) {
      setErrorMessage(t("formMessages.emailValidation"));
      return;
    }

    if (
      !formData.name ||
      !formData.email ||
      !formData.country ||
      !formData.people ||
      !formData.checkIn ||
      !formData.checkOut ||
      !recaptchaValue
    ) {
      setErrorMessage(t("formMessages.requiredFields"));
      return;
    }

    setIsSending(true);

    try {
      const serviceID = "casadiego_contactform";
      const templateID = "cotizacion";

      const response = await emailjs.sendForm(serviceID, templateID, e.target);

      if (response.data.success) {
        setSuccessMessage(response.data.message);

        // Limpiar mensaje de éxito después de 5 segundos (5000 milisegundos)
        setTimeout(() => {
          setSuccessMessage("");
        }, 5000);
      } else {
        setErrorMessage(response.data.message);

        // Limpiar mensaje de error después de 5 segundos (5000 milisegundos)
        setTimeout(() => {
          setErrorMessage("");
        }, 5000);
      }
    } catch (error) {
      console.error(t("formMessages.errorMessage"), error);
      setErrorMessage(t("formMessages.errorMessage"));

      // Limpiar mensaje de error después de 5 segundos (5000 milisegundos)
      setTimeout(() => {
        setErrorMessage("");
      }, 5000);
    } finally {
      setIsSending(false);
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
          rowSpacing={5}
        >
          <Grid item xs={12}>
            <TextField
              label={t("formLabels.name")}
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
              label={t("formLabels.phone")}
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
              label={t("formLabels.email")}
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
              label={t("formLabels.country")}
              variant="standard"
              fullWidth
              name="country"
              value={formData.country}
              onChange={handleChange}
              size="small"
              className="bg-white bg-opacity-20 js-hoverable-element"
              data-aos="zoom-in"
              data-aos-delay="250"
              data-aos-duration="500"
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            data-aos="zoom-in"
            data-aos-delay="250"
            data-aos-duration="500"
          >
            <Typography className="!text-[20px] js-hoverable-element">
              {t("fechaInicio")}
            </Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                className="js-hoverable-element w-11/12"
                name="checkIn"
                value={formData.checkIn}
              />
            </LocalizationProvider>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            data-aos="zoom-in"
            data-aos-delay="250"
            data-aos-duration="500"
          >
            <Typography className="!text-[20px] js-hoverable-element ">
              {t("fechaFin")}
            </Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                className="js-hoverable-element w-11/12"
                name="checkOut"
                value={formData.checkOut}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label={t("formLabels.people")}
              variant="standard"
              fullWidth
              name="people"
              type="number"
              value={formData.people}
              onChange={handleChange}
              size="small"
              className="bg-white bg-opacity-20 js-hoverable-element"
              data-aos="zoom-in"
              data-aos-delay="250"
              data-aos-duration="500"
            />
          </Grid>
          <Grid item xs={12} className="text-center">
            {successMessage && (
              <p style={{ color: "green" }}>{successMessage}</p>
            )}
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          </Grid>

          <Grid item xs={12}>
            <ReCAPTCHA
              sitekey="6LefR2wpAAAAAAGoHclc0vxPX4mfLXeRiDN3n7mg" // Reemplaza con tu clave del sitio de reCAPTCHA
              onChange={handleRecaptchaChange}
            />

            <Button
              type="submit"
              id="button"
              variant="contained"
              className="!text-[16px] bg-primary !hover:bg-gray-700 !font-light px-4 !lowercase !mt-6 js-hoverable-element"
              disabled={isSending}
            >
              {isSending
                ? t("submitButton.sending")
                : t("submitButton.default")}
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
            height="100%"
            allowfullscreen="true"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="google mmap"
          ></iframe>
        </Grid>
      </Grid>
    </form>
  );
}

export default ContactForm;
