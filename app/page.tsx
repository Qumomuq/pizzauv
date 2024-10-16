"use client"
import CardContainer from "../components/shared/CardContainer";
import Navbar from "../components/shared/Navbar";
import {store} from "../store";
import {Provider} from "react-redux";

export default function Home() {
  return (
      <>
          <Provider store={store}>
              <Navbar/>
              <CardContainer/>
          </Provider>
      </>
  );
}

