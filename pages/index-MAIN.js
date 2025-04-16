import Layout from "@/components/layout/Layout"
import About1 from "@/components/sections/About1"
import AppSection1 from "@/components/sections/AppSection1"
import BookingForm from "@/components/sections/BookingForm"
import Driver from "@/components/sections/Driver"
import Funfact from "@/components/sections/Funfact"
import News1 from "@/components/sections/News1"
import Pricing1 from "@/components/sections/Pricing1"
import Services1 from "@/components/sections/Services1"
import Slider from "@/components/sections/Slider"
import Testimonial from "@/components/sections/Testimonial"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <Slider />
                <Services1 />
                <About1 />
                <Pricing1 />
                <BookingForm />
                <Driver />
                <AppSection1 />
                <Funfact />
                <Testimonial />
                <News1 />
            </Layout>
        </>
    )
}