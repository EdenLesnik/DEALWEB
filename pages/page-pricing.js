import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import PricingTable from "@/components/sections/innerpages/PricingTable"


export default function Home() {
  return (
    <>
    <Layout headerStyle={1} footerStyle={3}>

    <PageTitle pageName="Pricing" />
    <PricingTable />

    </Layout>
    </>
    )
}