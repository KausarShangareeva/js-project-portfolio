import styled, { css } from "styled-components";
import { respond } from "../../../styles/responsive";

const ImgStyle = styled.img`
  border-radius: 20px;
  flex: 1 1 300px;
  max-width: 300px;
  height: auto;
  transform: rotate(${(props) => props.angle}deg);

  ${respond("tab-port")} {
    width: 100%;
    max-width: 200px;
  }

  ${respond("s-phone")} {
    width: 90%;
  }

  ${respond("m-phone")} {
    max-width: 180px;
  }

  ${respond("f-phone")} {
    max-width: 150px;
  }

  ${respond("xs-phone")} {
    max-width: 130px;
  }

  ${(props) =>
    props.design === "left" &&
    css`
      transform: rotate(-8deg);
      margin-right: -60px;
    `}

  ${(props) =>
    props.design === "center" &&
    css`
      transform: translateY(-50px);
      z-index: 1000;

      ${respond("f-phone")} {
        transform: translateY(70px);
        margin-bottom: 30px;
      }
    `}
  
  ${(props) =>
    props.design === "right" &&
    css`
      transform: rotate(8deg);
      margin-left: -60px;
    `}
`;

export function HeroImages({ data, angle, design }) {
  return <ImgStyle src={data.src} alt={data.alt} design={design} />;
}
