import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

export const ContactMe = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceId = "service_1zydh7h";
    const templateId = "template_rda7mmc";

    const apiKey = "m1vjfKLHSPvMJGwWh";

    emailjs
      .sendForm(serviceId, templateId, formRef.current, apiKey)
      .then((result) => {
        console.log(result.text);

        Swal.fire({
          title: "Mensaje enviado!",
          icon: "success",
          draggable: true,
        });
        formRef.current.reset();
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Hubo un problema al enviar el mensaje. Inténtalo nuevamente",
        });
      });
  };

  return (
    <section id="Contact" className="contact--section">
      <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
        <div>
          <h3>Contacto:</h3>
        </div>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          className="input-field"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="input-field"
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          className="input-field textarea"
          required
        />
        <button type="submit" className="submit-button">
          Enviar
        </button>
      </form>
    </section>
  );
};
