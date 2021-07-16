import Head from 'next/head'


import { AboutMe } from '../components/about-me/about-me.component';
import { Contact } from '../components/contact/contact.component';
import { Header } from '../components/header/header.component';
import { Projects } from '../components/myprojects/myprojects.component';



export default function Home() {

  

  return (
    <>
    <main >
      <Head>
        <title>Henrique | Home</title>
      </Head>
      <div>
        <Header />
        <AboutMe />
        <Projects />
        <Contact />
      </div>
    </main>

    </>
  )
}
