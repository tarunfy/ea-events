import emailjs from "@emailjs/browser";

export const sendEmail = (payload) => {
  emailjs.send(
    "service_z0wnfbq",
    "template_0c1b1bp",
    payload,
    "AcnVXO2IJ8qwRue8O"
  );
};
