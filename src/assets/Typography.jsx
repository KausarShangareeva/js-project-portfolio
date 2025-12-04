import styled from "styled-components";
import { respond } from "../styles/responsive";

//////////////////////////////
// H1 - Main Page Title
// Desktop - 30px
// Tablet - 24px
//////////////////////////////
const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  text-align: center;
  margin: 120px 0 20px 0;

  ${respond("tab-port")} {
    font-size: 24px;
    margin: 100px 0 20px 0;
  }

  ${respond("s-phone")} {
    margin: 50px 0 20px 0;
  }
`;

export function TitleH1({ children, ...props }) {
  return <H1 {...props}>{children}</H1>;
}

//////////////////////////////
// H2 - Section Title
// Desktop - 60px
// Tablet - 30px
//////////////////////////////
const TitleStyle = styled.h2`
  font-size: 60px;
  text-align: center;
  color: ${(props) => (props.bgColor === "#000" ? "#fff" : "#000")};

  ${respond("tab-port")} {
    font-size: 30px;
  }
`;

export function SectionTitle({ children, ...props }) {
  return <TitleStyle {...props}>{children}</TitleStyle>;
}

//////////////////////////////
// H3 - Subsection Title
// Desktop - 30px
// Tablet - 24px
// Mobile - 30px
//////////////////////////////
const H3 = styled.h3`
  font-size: 30px;
  text-align: ${(props) => (props.align === "Left" ? "left" : "center")};

  ${respond("tab-port")} {
    font-size: 24px;
  }

  ${respond("s-phone")} {
    font-size: 20px;
  }
`;

export function TitleH3({ children, ...props }) {
  return <H3 {...props}>{children}</H3>;
}

//////////////////////////////
// H4 - Small Highlight Title
// Desktop - 25px
// Tablet - 20px
//////////////////////////////
const H5 = styled.h5`
  font-size: 25px;
  font-weight: 500;

  ${respond("tab-port")} {
    font-size: 20px;
  }
`;

export function TitleH4({ children, ...props }) {
  return <H4 {...props}>{children}</H4>;
}

//////////////////////////////
// H5 - Highlight Small Box
// Desktop - 20px
// Tablet - 18px
//////////////////////////////
const H4 = styled.h4`
  color: white;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 20px;
  padding: 8px 10px;
  border: 1.5px solid white;
  border-radius: 10px;

  ${respond("tab-port")} {
    font-size: 18px;
  }
`;

export function TitleH5({ children, ...props }) {
  return <H5 {...props}>{children}</H5>;
}

//////////////////////////////
// P - Paragraph
// Desktop - 18px
// Tablet - 16px
//////////////////////////////
const P = styled.p`
  font-size: 18px;
  line-height: 1.5;

  ${respond("tab-port")} {
    font-size: 16px;
  }
`;

export function Paragraph({ children, ...props }) {
  return <P {...props}>{children}</P>;
}
