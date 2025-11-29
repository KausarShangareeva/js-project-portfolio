import { BlogCard } from "./components/BlogCard";
import { SectionTitle } from "../../assets/Typography";
import articlesData from "../../data/articlesData.json";
import styled from "styled-components";
import { respond } from "../../styles/responsive";

const SectionStyle = styled.section`
  padding: 0 16px;
`;

const SectionDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 120px;
  max-width: 1000px;
  margin: 0 auto;

  ${respond("tab-port")} {
    gap: 100px;
  }
`;

export default function BlogSection() {
  return (
    <SectionStyle>
      <SectionDiv>
        <SectionTitle>My words</SectionTitle>
        {articlesData.articles.map((article, index) => (
          <BlogCard data={article} key={article.id} index={index} />
        ))}
      </SectionDiv>
    </SectionStyle>
  );
}
