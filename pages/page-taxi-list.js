import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import TaxiList from "@/components/sections/innerpages/TaxiList"


export default function Home() {
  return (
    <>
    <Layout headerStyle={1} footerStyle={3}>

    <PageTitle pageName="Taxi List" />
    <TaxiList />

    </Layout>
    </>
    )
}