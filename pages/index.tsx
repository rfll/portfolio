import Intro from "@/components/Intro";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import Head from "next/head";
import styles from "@/styles/Projects.module.css";
import About from "@/components/About";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ryan Fortin</title>
      </Head>
      <Nav />
      <Intro />
      <div id="projectAnchor" className={styles.projectAnchor}></div>
      <Projects />
      <div id="aboutAnchor" className={styles.projectAnchor}></div>
      <About />
    </>
  );
}
