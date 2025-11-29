import BlogImage from "./BlogImage";
import BlogTitle from "./BlogTitle";
import BlogDescription from "./BlogDescription";
import BlogDate from "./BlogDate";
import BlogButtons from "./BlogButtons";
import styled from "styled-components";
import { respond } from "../../../styles/responsive";

const DivStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 120px;

  ${respond("tab-port")} {
    flex-direction: column;
    gap: 50px;
  }
`;

const DivBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export function BlogCard({ data }) {
  return (
    <DivStyle className="projectCard">
      <BlogImage src={data.imgSrc} alt={data.imgtitle} />
      <DivBox>
        <BlogDate date={data.date} />
        <BlogTitle title={data.title} />
        <BlogDescription desc={data.desc} />
        <BlogButtons button={data.button} />
      </DivBox>
    </DivStyle>
  );
}
