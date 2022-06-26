// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";
import "./Contact.css";

const Contact = (props) => {
  return (
    <div className="card">
      <img className="image" src={props.photo.photo} alt="Sebuah gambar"></img>
      <div className="teks">
        <p className="name">{props.name.name}</p>
        <p className="phone">{props.phone.phone}</p>
        <p className="email">{props.email.email}</p>
      </div>
    </div>
  );
};

export default Contact;
