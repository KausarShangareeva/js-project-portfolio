import { SectionTitle } from "../../assets/Typography";
import { HeroDescription } from "./components/HeroDescription";
import { HeroImages } from "./components/HeroImages";
import { TitleH1 } from "../../assets/Typography";
import meData from "../../data/aboutMe.json";
import styled from "styled-components";
import { respond } from "../../styles/responsive";

const SectionStyle = styled.section``;

const SectionDiv = styled.div`
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  gap: 70px;
  max-width: 1000px;
  margin: 0 auto;
`;

const FlexDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 16px 0 16px;

  ${respond("f-phone")} {
    margin: -30px 16px 0 16px;
  }
`;

export default function HeroSection({ data }) {
  return (
    <SectionStyle>
      <TitleH1>👋🏻 Hi there, I’m</TitleH1>
      <SectionDiv>
        <SectionTitle>Kausar</SectionTitle>

        <FlexDiv>
          {meData.img.map((el, index) => {
            let design;

            switch (index) {
              case 0:
                design = "left";
                break;
              case 1:
                design = "center";
                break;
              case 2:
                design = "right";
                break;
              default:
                design = "default";
            }

            return <HeroImages key={el.id} data={el} design={design} />;
          })}
        </FlexDiv>

        <HeroDescription data={meData} />
      </SectionDiv>
    </SectionStyle>
  );
}
