import React from "react";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <section id="home" style={{ height: "100vh", background: "#ffcccb" }}>
        <h1>Home Section</h1>
      </section>
      <section id="about" style={{ height: "100vh", background: "#add8e6" }}>
        <h1>About Section</h1>
      </section>
      <section id="services" style={{ height: "100vh", background: "#90ee90" }}>
        <h1>Services Section</h1>
      </section>
      <section id="contact" style={{ height: "100vh", background: "#d3d3d3" }}>
        <h1>Contact Section</h1>
      </section>
    </div>
  );
};

export default App;

