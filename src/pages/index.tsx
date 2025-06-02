import Head from "next/head";
import CardContainer from "../components/shared/CardContainer";
import React from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Пиццерия Южные Ворота</title>
        <meta name="description" content="Вкусная пицца ждёт вас в пиццерии Южные Ворота. Мы находимся по адресу Ул.Тихая 111, м-н Южные Ворота" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon/favicon.png" sizes="32x32" />
      </Head>
      <div
        // className={`${nunito.variable} ${nunito.variable}`}
      >
          <CardContainer/>
      </div>
    </>
  );
}
