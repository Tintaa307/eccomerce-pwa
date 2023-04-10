import LandingPage from "../components/home/LandingPage"
import Head from "next/head"
import Nav from "../components/nav/Nav"
import About from "../components/about/About"

export default function Home() {
  return (
    <>
      <Head>
        <title>Store</title>
        <meta name="description" content="Cheap Store" />
      </Head>
      <Nav />
      <LandingPage />
      <About />
    </>
  )
}
