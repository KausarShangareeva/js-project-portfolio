import styled from "styled-components";
import { respond } from "../../../styles/responsive";

const ImgStyle = styled.img`
  width: 400px;
  height: 400px;
  border-radius: 20px;
  object-fit: cover;

  ${respond("tab-port")} {
    width: 100%;
    max-width: 800px;
    height: 400px;
  }
`;
export default function BlogImage({ src, alt }) {
  return <ImgStyle src={src} alt={alt} />;
}
