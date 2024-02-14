import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import { TextField, Typography, Grid, Button } from "@mui/material";
import AOS from "aos";
import { useTranslation } from "react-i18next";
// import ReCAPTCHA from "react-google-recaptcha";

function ContactForm() {
  useEffect(() => {
    AOS.init();
  }, []);

  // const [recaptchaValue, setRecaptchaValue] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    checkIn: null,
    checkOut: null,
    country: "",
    people: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

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

  const clearMessages = () => {
    setSuccessMessage("");
    setErrorMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    clearMessages();

    /*  if (!recaptchaValue) {
      setErrorMessage("Por favor, demuestra que no eres un robot.");
      return;
    } */

    if (!isEmailValid(formData.email)) {
      setErrorMessage(t("formMessages.emailValidation"));
      return;
    }

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.country ||
      !formData.people ||
      !formData.checkIn ||
      !formData.checkOut
    ) {
      setErrorMessage(t("formMessages.requiredFields"));
      return;
    }

    setIsSending(true);

    const serviceID = "smtp_diego"; // Reemplaza con tu Service ID
    const templateID = "template_08r91ry";
    const userID = "LkhVpv6EeTnkdyXPE";

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then((response) => {
        if (response && response.status === 200) {
          setSuccessMessage(t("formMessages.successMessage"));

          setTimeout(() => {
            setSuccessMessage("");
          }, 5000);
        } else {
          setErrorMessage(response.text || t("formMessages.errorMessage"));

          setTimeout(() => {
            setErrorMessage("");
          }, 5000);
        }
      })
      .catch((error) => {
        setErrorMessage(t("formMessages.errorMessage"));

        setTimeout(() => {
          setErrorMessage("");
        }, 5000);
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  // const recaptchaKey = "6LefR2wpAAAAAAGoHclc0vxPX4mfLXeRiDN3n7mg";

  return (
    <form id="form" onSubmit={handleSubmit}>
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
              id="name"
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
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              size="small"
              className="bg-white bg-opacity-20 js-hoverable-element"
              data-aos="zoom-in"
              data-aos-delay="150"
              data-aos-duration="500"
            />
            <Typography className="!text-[14px]">{t("phoneNumber")}</Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label={t("formLabels.email")}
              variant="standard"
              fullWidth
              name="email"
              id="email"
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
              id="country"
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
            <TextField
              className="js-hoverable-element w-11/12"
              name="checkIn"
              id="checkIn"
              type="date" // Cambiado a un campo de entrada de fecha
              value={formData.checkIn}
              onChange={handleChange}
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
            <Typography className="!text-[20px] js-hoverable-element ">
              {t("fechaFin")}
            </Typography>
            <TextField
              className="js-hoverable-element w-11/12"
              name="checkOut"
              id="checkOut"
              type="date" // Cambiado a un campo de entrada de fecha
              value={formData.checkOut}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label={t("formLabels.people")}
              variant="standard"
              fullWidth
              name="people"
              id="people"
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
          <Grid item xs={12}>
            {successMessage && (
              <Typography className="text-success !text-[16px]">
                {successMessage}
              </Typography>
            )}
            {errorMessage && (
              <Typography className="text-error !text-[16px]">
                {errorMessage}
              </Typography>
            )}
          </Grid>
          {/* <Grid item xs={12}>
            <ReCAPTCHA
              sitekey={recaptchaKey}
              onChange={(value) => setRecaptchaValue(value)}
            />
          </Grid> */}
          <Button
            type="submit"
            id="button"
            variant="contained"
            className="!text-[16px] bg-primary !hover:bg-gray-700 !font-light px-4 !lowercase !mt-6 js-hoverable-element"
            disabled={isSending}
          >
            {isSending ? t("submitButton.sending") : t("submitButton.default")}
          </Button>
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
