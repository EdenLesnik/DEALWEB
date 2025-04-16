import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/home3/Banner"
import Service from "@/components/sections/home3/Service"
import About from "@/components/sections/home3/About"

import AppSection2 from "@/components/sections/AppSection2"

import Clients from "@/components/sections/Clients"

export default function Home() {

    return (
        <>
            <Layout headerStyle={2} footerStyle={2}>
                <Banner />
                <About />
                <Service />
                <AppSection2 />
                
        
        
       
                <Clients />
            </Layout>
        </>
    )
}