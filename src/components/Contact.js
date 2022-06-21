// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";
import "./Contact.css";

const Contact = ({ alt, name, phone, email, photo }) => {
  return (
    <div className="card">
      <div className="gambar">
        <img className="image" src={photo} alt="Sebuah gambar"></img>
      </div>
      <div className="teks">
        <div className="name">{name}</div>
        <div className="phone">{phone}</div>
        <div className="email">{email}</div>
      </div>
    </div>
  );
};

export default Contact;
