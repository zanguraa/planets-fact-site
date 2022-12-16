import React, { useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";
import styled from "styled-components";
import SourceImg from "../assets/icon-source.svg";

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
      <PlanetHeader color={currentPlanet.color}>
        <h4>OVERVIEW</h4>
        <h4>STRUCTURE</h4>
        <h4>SURFACE</h4>
      </PlanetHeader>
      <PlanetBody>
        <PlanetPicture>
          <img src={process.env.PUBLIC_URL + planet} alt={currentPlanet.name} />
        </PlanetPicture>
        <PlanetDescription>
          <h1>{currentPlanet.name}</h1>
          <span>{currentPlanet.overview.content}</span>
          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            Source:
            <a
              style={{ textDecoration: "none", color: "white" }}
              href={currentPlanet.overview.source}
              target="_blank"
            >
              Wikipedia
            </a>
            <img src={SourceImg} alt="source" />
          </span>
        </PlanetDescription>
        <PlanetBottom>
          <span>ROTATION TIME</span>
          <h2>{currentPlanet.rotation}</h2>
        </PlanetBottom>
        <PlanetBottom>
          <span>REVOLUTION TIME</span>
          <h2>{currentPlanet.revolution}</h2>
        </PlanetBottom>
        <PlanetBottom>
          <span>radius</span>
          <h2>{currentPlanet.radius}</h2>
        </PlanetBottom>
        <PlanetBottom>
          <span>AVERAGE TEMP.</span>
          <h2>{currentPlanet.temperature}</h2>
        </PlanetBottom>
      </PlanetBody>
    </PlanetCont>
  );
}

const PlanetCont = styled.div``;
const PlanetBody = styled.div`
  padding: 24px;
`;

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
    border-bottom: 4px solid ${(props) => props.color};
    padding-bottom: 24px;
  }
`;

const PlanetPicture = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 304px;
  width: auto;
  img {
    width: 111px;
    height: 111px;
  }
`;

const PlanetDescription = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 24px;
  h1 {
    font-family: "Antonio";
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 52px;
    text-align: center;
    text-transform: uppercase;
    color: #ffffff;
    margin-bottom: 16px;
  }
  span {
    font-family: "Spartan";
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 22px;
    text-align: center;
    color: #ffffff;
  }
`;

const PlanetBottom = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 10px 24px;
  margin-bottom: 10px;
  span {
    font-family: "Spartan";
    font-style: normal;
    font-weight: 700;
    font-size: 8px;
    line-height: 16px;
    letter-spacing: 0.727273px;
    text-transform: uppercase;
    color: #ffffff;
    mix-blend-mode: normal;
    opacity: 0.5;
  }
  h2 {
    font-family: "Antonio";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 26px;
    text-align: right;
    letter-spacing: -0.75px;
    text-transform: uppercase;

    color: #ffffff;
  }
`;
