import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";
import {Provider} from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import store, { persistor } from '../store/persistedStore.ts';
import {Nunito} from "next/font/google";
import {Metadata} from "next/types";

const nunito = Nunito({
    subsets: ['cyrillic'],
    variable: '--font-nunito',
    weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
    title: "Пиццерия Южные Ворота",
    description: "Пиццерия Южные Ворота",
};

export default function App({ Component, pageProps }: AppProps) {
  return (
      <Provider store={store}>
          <PersistGate persistor={persistor}>
              <main className={nunito.className}>
                  <Header/>
                  <Navbar/>
                  <Component {...pageProps} />;
                  <Footer/>
              </main>
         </PersistGate>
      </Provider>
  )
}
