"use client"
import CardContainer from "../components/shared/CardContainer";
import Navbar from "../components/shared/Navbar";
// import {store, persistor} from "../lib/store";
import store, { persistor } from '../lib/persistedStore';

import {Provider} from "react-redux";
import Header from "../components/shared/Header";
import { PersistGate } from 'redux-persist/integration/react'
import Footer from "../components/shared/Footer";
// import storage from 'redux-persist/lib/storage'

export default function Home() {
  return (
      <>
          <Provider store={store}>
              <PersistGate loading={null} persistor={persistor}>
                  <Header/>
                  <Navbar/>
                  <CardContainer/>
                  <Footer/>
              </PersistGate>
          </Provider>
      </>
  );
}

