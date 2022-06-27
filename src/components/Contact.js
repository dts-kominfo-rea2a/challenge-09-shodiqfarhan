// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";
import "./Contact.css";

const Contact = (props) => {
  return (
    <div className="card">
      <img className="image2" src={props.photo.photo} alt="Sebuah gambar"></img>
      <div className="teks">
        <p className="nama">{props.name.name}</p>
        <p className="telp">{props.phone.phone}</p>
        <p className="email2">{props.email.email}</p>
      </div>
    </div>
  );
};

export default Contact;
