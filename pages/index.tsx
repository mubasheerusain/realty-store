import Head from 'next/head'
import Footer from '../components/Footer'
import { LandingPage } from '../components/LandingPage'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Realty Store</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-
awesome.min.css" rel="stylesheet" integrity="sha384-
wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
          crossOrigin="anonymous"></link>
      </Head>

      <main>
        <LandingPage />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
