import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Label } from "./Label";
import { Input } from "./Input";
import { TextArea } from "./TextArea";
import { ToastContainer, toast } from "react-toastify";

export const FormCorreo = () => {
  const serviceId = import.meta.env.VITE_SERVICE_ID;
  const templeteId = import.meta.env.VITE_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const userName = formData.get("user_name").trim();
    const userEmail = formData.get("user_email").trim();
    const message = formData.get("message").trim();

    if (!userName || !userEmail || !message) {
      toast.error("Por favor, completa todos los campos antes de enviar ✏️", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return; 
    }

    emailjs
      .sendForm(`${serviceId}`, `${templeteId}`, form.current, {
        publicKey: `${publicKey}`,
      })
      .then(
        () => {
          toast.success(
            "¡Mensaje enviado con éxito! 🎉🎉 Te respondere lo antes posible ⏱️",
            {
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            }
          );
          form.current.reset();
        },
        (error) => {
          toast.error("Hubo un problema al enviar el mensaje 😞", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      );
  };

  return (
    <div className="row justify-content-center">
      <div className="col-6 mt-2">
        <form ref={form} onSubmit={sendEmail} className="field">
          <div>
            <Label nombre="Tu Nombre" />
            <Input tipo="text" name="user_name" placeholder="Nombre" />
          </div>
          <div>
            <Label nombre="Tu Email" />
            <Input tipo="email" name="user_email" placeholder="Email" />
          </div>
          <div>
            <Label nombre="Mensaje" />
            <TextArea name="message" placeholder="Escribenos un mensaje" />
          </div>
          <div className="justify-content-end text-end mt-3">
            <input
              type="submit"
              value="Enviar ✅"
              className="btn btn-primary "
            />
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};
