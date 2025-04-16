import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="he" dir="rtl">

            <Head>
        {/* Google Fonts */}
        <link
  href="https://fonts.googleapis.com/css2?family=Heebo:wght@100..900&family=Noto+Sans+Hebrew:wght@100..900&display=swap"
  rel="stylesheet"
/>

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
