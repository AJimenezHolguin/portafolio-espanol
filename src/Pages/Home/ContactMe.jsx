import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from 'sweetalert2'

export const ContactMe = () => {
  const refForm = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const serviceId = "service_1zydh7h";
    const templateId = "template_rda7mmc";

    const apiKey = "bRO9ukLUmI5-eYBiE";

    emailjs
      .sendForm(serviceId, templateId, refForm.current, apiKey)
      .then((result) => {
        console.log(result.text)
      
      Swal.fire({
        title: "Mensaje enviado!",
        icon: "success",
        draggable: true
      })
      refForm.current.reset()
    })
    .catch((error) => {
      console.error(error)
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Hubo un problema al enviar el mensaje. Inténtalo nuevamente", 
      });
    }) 
    
  };


  return (
    <section id="Contact" className="contact--section">
      <form ref={refForm} action="" onSubmit={handleSubmit}>
        <div className="header-contact">
          <h2>Contáctame</h2>
          <p>Por favor complete este formulario</p>
        </div>
        <fieldset className="field-name">
          <label className="symbol-required name" htmlFor="Nombre">
            Nombre{" "}
          </label>
          <input
            name="name"
            type="text"
            placeholder="Ej: Anderson Jimenez"
            required
          />
        </fieldset>
        <fieldset className="field-email">
          <label className="symbol-required" name="email">
            Email{" "}
          </label>
          <input
            name="email"
            type="email"
            id="email"
            placeholder="Ej: anjimhol23@gmail.com"
            required
          />
        </fieldset>
        <fieldset className="field-message">
          <label className="symbol-required">Mensaje </label>
          <textarea
            name="message"
            cols="30"
            rows="10"
            maxLength="500"
            placeholder="Escribe tu mensaje"
          ></textarea>
        </fieldset>
        <button className="btn btn-outline-primary" 
        >Enviar
        </button>
      </form>
    </section>
  );
};
