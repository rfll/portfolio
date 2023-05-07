import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Head from "next/head";

export default function Home() {
  return (
    <>
        <Head>
          <title>Ryan Fortin</title>
        </Head>
        <Intro />
        <Projects />
    </>
  );
}
