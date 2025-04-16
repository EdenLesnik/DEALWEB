import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import About from "@/components/sections/innerpages/About"
import TabService from "@/components/sections/TabService"
import Services2 from "@/components/sections/Services2"
import Testimonial from "@/components/sections/Testimonial"
import Driver from "@/components/sections/Driver"
import AppSection2 from "@/components/sections/AppSection2"
import News1 from "@/components/sections/News1"


export default function Home() {
  return (
    <>
    <Layout headerStyle={1} footerStyle={3}>

    <PageTitle pageName="About Us" />
    <About />
    <TabService />
    <Services2 />
    <Testimonial />
    <Driver />
    <AppSection2 />
    <News1 />

    </Layout>
    </>
    )
}