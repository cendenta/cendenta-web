import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="h-full">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Red+Hat+Text&display=swap" rel="stylesheet" /> 
        {/* <script defer 
          data-code="zusw7OsbEKyRqzUgaBeUiAsWmNGqngXs"
          id="pirschjs"
          type="text/javascript" 
          src="https://api.pirsch.io/pirsch.js"></script> */}
      </Head>
      <body className="h-full">
        {/* <Toaster /> */}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};
