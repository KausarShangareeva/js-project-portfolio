import styled from "styled-components";
import { TitleH4 } from "../../../assets/Typography";

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
      <TitleH4>{data.fullname}</TitleH4>
      <TitleH4>{data.number}</TitleH4>
      <TitleH4>{data.mail}</TitleH4>
    </DivStyle>
  );
}
