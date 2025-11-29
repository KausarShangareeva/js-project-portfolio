import ProjectCard from "./components/ProjectCard";
import projectData from "../../data/projectsData.json";
import { SectionTitle } from "../../assets/Typography";
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

export default function FeaturedProjectsSection() {
  return (
    <SectionStyle>
      <SectionDiv>
        <SectionTitle>Featured Projects</SectionTitle>
        {projectData.projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </SectionDiv>
    </SectionStyle>
  );
}
