import styled from "styled-components";

const Logo = styled.img`
  width: 160px;
`;

export function Avatar({ data }) {
  return <Logo src={data.imgFooter.src} alt={data.imgFooter.alt} />;
}
