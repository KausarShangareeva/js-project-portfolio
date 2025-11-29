import { TitleH3 } from "../../../assets/Typography";
import { Paragraph } from "../../../assets/Typography";

export function HeroDescription({ data }) {
  return (
    <>
      <TitleH3>{data.proffession}</TitleH3>
      <Paragraph>{data.desc}</Paragraph>
    </>
  );
}
