import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "Taxix | Taxi Business React Nextjs Template"}
                </title>
                <link
                    href="https://fonts.googleapis.com/css2?family=Archivo:wght@300;400;500;600;700;800;900&family=Epilogue:wght@300;400;500;600;700;800;900&family=Odibee+Sans&display=swap"
                    rel="stylesheet"
                />
            </Head>
        </>
    )
}

export default PageHead