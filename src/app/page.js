import Image from "next/image";
import styles from "./page.module.css";
import Header from "./Modulos/home/components/header/Header.js";
import Home from "./Modulos/home/Home";

import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Modulos/home/components/Footer/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <Home/>
      <Footer/>
    </>
  );
}
