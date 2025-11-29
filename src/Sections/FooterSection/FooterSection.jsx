import { SectionTitle } from "../../assets/Typography";
import { Avatar } from "./components/Avatar";
import { Contacts } from "./components/FooterContacts";
import { FooterIconList } from "./components/FooterIcons";
import meData from "../../data/aboutMe.json";
import styled from "styled-components";

const SectionStyle = styled.section`
  background-color: #000000;
  margin: 100px 0 0 0;
  padding: 80px 16px;
  display: flex;
  flex-direction: column;
  gap: 120px;
`;

const SectionDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  max-width: 1000px;
  justify-content: space-between;
  margin: 0 auto;
`;

export default function FooterSection() {
  return (
    <SectionStyle>
      <SectionDiv>
        <Avatar data={meData} />
        <SectionTitle bgColor="#000">Lets Talk</SectionTitle>
        <Contacts data={meData} />
        <FooterIconList />
      </SectionDiv>
    </SectionStyle>
  );
}
