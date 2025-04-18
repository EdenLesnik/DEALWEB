import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import Faq from "@/components/sections/innerpages/Faq"


export default function Home() {
  return (
    <>
    <Layout headerStyle={1} footerStyle={3}>

    <PageTitle pageName="Faq" />
    <Faq />

    </Layout>
    </>
    )
}