import Layout from "@/components/layout/Layout"
import About2 from "@/components/sections/About2"
import AppSection2 from "@/components/sections/AppSection2"
import Banner from "@/components/sections/Banner"
import Pricing2 from "@/components/sections/Pricing2"
import Services2 from "@/components/sections/Services2"
import TabBooking from "@/components/sections/TabBooking"
import TabService from "@/components/sections/TabService"
import Map from "@/components/sections/Map"
import Benefits from "@/components/sections/Benefits"
import News2 from "@/components/sections/News2"
import Clients from "@/components/sections/Clients"
export default function Home2() {

    return (
        <>
            <Layout headerStyle={2} footerStyle={2}>
                <Banner />
                <About2 />
                <Services2 />
                <TabService />
                <TabBooking />
                <Pricing2 />
                <AppSection2 />
                <Map />
                <Benefits />
                <News2 />
                <Clients />
            </Layout>
        </>
    )
}