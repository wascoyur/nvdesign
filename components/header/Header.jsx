import Head from "next/head";
import React from "react";

const Header = () => {
  return (
    <div>
      <Head>
        <title>Интернет магазин NVDesign</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
        />
      </Head>
    </div>
  );
};

export default Header;
