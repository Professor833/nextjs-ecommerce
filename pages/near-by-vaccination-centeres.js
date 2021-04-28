import React, { useEffect, useState } from "react";
import Head from "next/head";
import Layout from "../Components/Layouts/Layout";
// import dynamic from "next/dynamic";

// const Map = dynamic(() => import("../components/Map/Map.js"), {
//   loading: () => "Loading...",
//   ssr: false,
// });

function NearByVactinationCenters() {
  const isBrowser = typeof window !== "undefined";
  //   const [ScriptTag, setScriptTag] = useState(<script />);
  useEffect(() => {
    loadNearbyCovidCentresMapmyIndiaDiv(
      document.getElementById("nearby-covid-places-mapmyindia")
    );
    return () => {
      //   ScriptTag()
    };
  }, []);

  console.log("isBrowser ? => ", isBrowser);
  return (
    <>
      <Head>
        <script src="https://maps.mapmyindia.com/covid-places/showNearbyCovidPlacesOnMap.js"></script>
      </Head>
      <Layout>
        <div>
          <div id="nearby-covid-places-mapmyindia"></div>

          {/*isBrowser ? ScriptTag : ""*/}
        </div>
      </Layout>
    </>
  );
}

export default NearByVactinationCenters;
