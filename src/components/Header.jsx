import React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <HeaderCont>
      <h1>THE PLANETS</h1>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="17">
        <g fill="#FFF" fillRule="evenodd">
          <path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" />
        </g>
      </svg>
    </HeaderCont>
  );
}

const HeaderCont = styled.div`
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
