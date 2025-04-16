import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import Booking from "@/components/sections/innerpages/Booking"


export default function Home() {
  return (
    <>
    <Layout headerStyle={1} footerStyle={3}>

    <PageTitle pageName="Booking" />
    <Booking />

    </Layout>
    </>
    )
}