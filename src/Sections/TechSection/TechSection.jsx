import { SectionTitle } from "../../assets/Typography";
import { TechColumn } from "./components/TechColumn";
import techData from "../../data/techData.json";
import styled from "styled-components";
import { respond } from "../../styles/responsive";

const SectionStyle = styled.section`
  background-color: #000000;
  margin: 100px 0;
  padding: 80px 16px;
  display: flex;
  flex-direction: column;
  gap: 120px;
`;

const SectionDiv = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 30px;
  max-width: 1000px;
  justify-content: space-between;
  margin: 0 auto;

  ${respond("tab-port")} {
    flex-direction: column;
  }
`;

export default function TechSection() {
  return (
    <SectionStyle>
      <SectionTitle bgColor="#000">Tech</SectionTitle>
      <SectionDiv>
        {Object.values(techData.tech).map((tech, index) => (
          <TechColumn key={index} tag={tech} />
        ))}
      </SectionDiv>
    </SectionStyle>
  );
}
