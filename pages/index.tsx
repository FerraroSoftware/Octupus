import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Hero from "../components/Hero";
import Feature from "../components/Feature";

const Home: NextPage = () => {
  return (
    <>
   <Hero></Hero>
   <Feature></Feature>
   </>
  );
};

export default Home;
