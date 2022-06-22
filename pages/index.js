import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
// import Navbar from '../components/Navbar'
// import Hero from './components/Hero'
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>NOTUS</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <Header />
    </>
  );
}
