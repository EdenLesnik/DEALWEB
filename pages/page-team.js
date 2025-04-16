import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import TeamGrid from "@/components/sections/innerpages/TeamGrid"


export default function Home() {
  return (
    <>
    <Layout headerStyle={1} footerStyle={3}>

    <PageTitle pageName="Driver Grid" />
    <TeamGrid />

    </Layout>
    </>
    )
}