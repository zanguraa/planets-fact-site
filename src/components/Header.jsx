import React from "react";
import data from "../data.json";
import styled from "styled-components";
import { Link } from "react-router-dom";


export default function Header({ burgerMenu, setBurgerMenu, colors }) {
  return (
    <HeaderCont>
      <h1>THE PLANETS</h1>
      <svg
        onClick={() => setBurgerMenu((prev) => !prev)}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="17"
      >
        <g fill="#FFF" fillRule="evenodd">
          <path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" />
        </g>
      </svg>

      <BurgerMenuContainer burgerMenu={burgerMenu}>
        {data.map((item, index) => {
          return (
            <div>
              <LinkContainer
                onClick={() => setBurgerMenu(false)}
                to={`/planets/${item.name}`}
                color={item.color}
              >
                <div
                  style={{
                    borderRadius: "50%",
                    backgroundColor: item.color,
                    width: "20px",
                    height: "20px",
                  }}
                ></div>
                <h5>{item.name}</h5>
              </LinkContainer>
            </div>
          );
        })}
      </BurgerMenuContainer>
    </HeaderCont>
  );
}

const HeaderCont = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 17px 24px;
  h1 {
    font-weight: 400;
    font-size: 28px;
    line-height: 36px;
    letter-spacing: -1.05px;
    text-transform: uppercase;
    color: #ffffff;
    margin: 0;
  }
`;

const BurgerMenuContainer = styled.div`
  display: ${(props) => (props.burgerMenu ? "block" : "none")};
  position: absolute;
  left: 0;
  top: 70px;
  width: 100%;
  background: #070724;
  height: 100vh;
  z-index: 10;
`;

const LinkContainer = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  gap: 25px;
  padding: 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  h5 {
    font-family: "Spartan";
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 25px;
    text-align: center;
    letter-spacing: 1.36364px;
    text-transform: uppercase;
    color: #ffffff;
  }
`;
