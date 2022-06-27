import "./App.css";

// Uncomment untuk memuat daftar kontak
import contacts from "./data/contacts.json";
import Header from "./components/Header";
import Contact from "./components/Contact";

const App = () => {
  // Masukkan Header dan Contact ke dalam div App
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <Contact name={contacts[0]} phone={contacts[0]} email={contacts[0]} photo={contacts[0]} />
      <Contact name={contacts[1]} phone={contacts[1]} email={contacts[1]} photo={contacts[1]} />
      <Contact name={contacts[2]} phone={contacts[2]} email={contacts[2]} photo={contacts[2]} />
      <Contact name={contacts[3]} phone={contacts[3]} email={contacts[3]} photo={contacts[3]} />
      <Contact name={contacts[4]} phone={contacts[4]} email={contacts[4]} photo={contacts[4]} />
      <Contact name={contacts[5]} phone={contacts[5]} email={contacts[5]} photo={contacts[5]} />
    </div>
  );
};

export default App;
