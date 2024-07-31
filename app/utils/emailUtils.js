import emailjs from "emailjs-com";

export const sendEmail = (form) => {
  return emailjs.sendForm(
    "service_xverwwz", // replace with your service ID
    "template_ruve0c8", // replace with your template ID
    form,
    "0xwXxCIZpgnLiyIbu" // replace with your user ID
  );
};
