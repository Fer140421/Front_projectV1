import Image from "next/image";
import styles from "./page.module.css";
import Header from "./Modulos/header/components/Header";
import Home from "./Modulos/home/components/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Modulos/footer/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <Home/>
      <Footer/>
    </>
  );
}
