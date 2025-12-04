import styled from "styled-components";
import { TitleH5 } from "../../../assets/Typography";

const DivStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  font-size: 25px;
  font-weight: 600;
  color: #fff;
`;

export function Contacts({ data }) {
  return (
    <DivStyle>
      <TitleH5>{data.fullname}</TitleH5>
      <TitleH5>{data.number}</TitleH5>
      <TitleH5>{data.mail}</TitleH5>
    </DivStyle>
  );
}
