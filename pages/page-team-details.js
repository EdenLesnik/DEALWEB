import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import TeamDetails from "@/components/sections/innerpages/TeamDetails"


export default function Home() {
  return (
    <>
    <Layout headerStyle={1} footerStyle={3}>

    <PageTitle pageName="Driver Details" />
    <TeamDetails />

    </Layout>
    </>
    )
}