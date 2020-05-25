import React from "react";
import Navigation from "./Navigation";
import Banner from "./Banner";
import Group from "./Group";
import Documents from "./Documents";
import Footer from "./Footer";
import Eirik from "../pictures/Eirik.jpg";
import Markus from "../pictures/Markus.jpg";
import Rany from "../pictures/Rany.jpg";
import forprosjektbilde from "../pictures/forprosjektrapport.png";
import prosjektskisseBilde from "../pictures/prosjektskisse.png";
import sluttrapportBilde from "../pictures/sluttrapport.png";
import forprosjekt from "../documents/Forprosjektrapport.pdf";
import sluttrapport from "../documents/Sluttrapport.pdf";
import prosjektskisse from "../documents/Prosjektskisse.pdf";
import PDFBilde from "../pictures/PDFImage.jpg";

const bachelorDocuments = [
  {
    title: "Prosjektskisse",
    documentLink: prosjektskisse,
    bilde: prosjektskisseBilde,
  },
  {
    title: "Forprosjekt",
    documentLink: forprosjekt,
    bilde: forprosjektbilde,
  },
  {
    title: "Sluttrapport",
    documentLink: sluttrapport,
    bilde: sluttrapportBilde,
  },
  {
    title: "Presentasjon",
    documentLink: sluttrapport,
    bilde: PDFBilde,
  },
];

const bachelorMembers = [
  {
    name: "Rany Tarek Boroum",
    imgLink: Rany,
    about:
      "25 år, dataingeniør. Rany har en ingeniørgrad innen maskin fra tidligere og bringer med seg mye kunnskap derfra.",
  },
  {
    name: "Eirik Bøyum",
    imgLink: Eirik,
    about:
      "28 år, dataingeniør. Eirik har flere interesser og har vært innom både økonomi, politikk og nanoteknologi.",
  },
  {
    name: "Markus Hellestveit",
    imgLink: Markus,
    about:
      "25 år, dataingeniør. Det som interesserer Markus innenfor IT er backend-utvikling og datasikkerhet.",
  },
];

export default function App() {
  return (
    <React.Fragment>
      <Navigation />
      <main>
        <Banner />

        <Group bachelorMembers={bachelorMembers} />

        <Documents bachelorDocuments={bachelorDocuments} />
      </main>
      <Footer />
    </React.Fragment>
  );
}
