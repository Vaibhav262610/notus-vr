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
      <Navbar />
      <Header />
    </>
  );
}
