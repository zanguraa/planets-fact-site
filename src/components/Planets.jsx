import React, { useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";
import { Link } from "react-router-dom";
import Header from "./Header";
import styled from "styled-components";

export default function Planets() {
  const [info, setInfo] = useState("overview");
  const [activeText, SetActiveText] = useState(true);

  const { name } = useParams();
  const currentPlanet = data.filter(
    (curPlanet) => curPlanet.name.toLowerCase() === name.toLowerCase()
  )[0];

  const { planet, internal, geology } = currentPlanet.images;
  console.log(planet);
  return (
    <PlanetCont>
      <Header />
      <PlanetBody>
        <PlanetHeader >
          <h4 >OVERVIEW</h4>
          <h4>STRUCTURE</h4>
          <h4>SURFACE</h4>
        </PlanetHeader>
        <PlanetPicture>
          <img src={process.env.PUBLIC_URL + planet} alt={currentPlanet.name} />
        </PlanetPicture>
        <PlanetDescription></PlanetDescription>
      </PlanetBody>
    </PlanetCont>
  );
}

const PlanetCont = styled.div``;
const PlanetBody = styled.div``;

const PlanetHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 24px 0 24px;
  border: 1px solid rgb(246 242 242 / 50%);

  h4 {
    font-weight: 700;
    font-size: 9px;
    line-height: 10px;
    letter-spacing: 1.92857px;
    color: #ffffff;
    mix-blend-mode: normal;
    opacity: 0.5;
    margin: 0;
    border-bottom:  4px solid #419EBB;
    padding-bottom: 24px;
  }
`;

const PlanetPicture = styled.div`
display: flex;
align-items: center;
justify-content: center;
  height: 304px;
  width: auto;
  img{
    width: 111px;
    height: 111px;
  };
`;

const PlanetDescription = styled.div``;
