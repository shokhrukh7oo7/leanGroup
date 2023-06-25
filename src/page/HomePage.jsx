import React, { Fragment } from "react";
import Header from "../components/header/Header";
import Nav from "../components/nav/Nav";
import Sertificate from "../components/sertificate/Sertificate";
import About from "../components/about/About";
import Products from "../components/products/Products";
import Team from "../components/ourTeam/Team";
import Footer from "../components/footer/Footer";

const HomePage = () => {
  return (
    <Fragment>
      <Nav />
      <main>
        <Header />
        <About />
        <Sertificate />
        <Products />
        <Team />
      </main>
      <Footer />
    </Fragment>
  );
};

export default HomePage;
