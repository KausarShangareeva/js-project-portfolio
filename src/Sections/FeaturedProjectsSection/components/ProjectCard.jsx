import ProjectImage from "./ProjectImage";
import ProjectTitle from "./ProjectTitle";
import ProjectDescription from "./ProjectDescription";
import ProjectTags from "./ProjectTags";
import ProjectButtons from "./ProjectButtons";
import styled from "styled-components";
import { respond } from "../../../styles/responsive";

const DivStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 120px;

  ${respond("tab-port")} {
    flex-direction: column;
    gap: 50px;
    align-items: flex-start;
  }
`;

export const ProjectImageWrapper = styled.div`
  width: 100%;

  ${respond("tab-port")} {
    order: 0;
  }
`;

const DivBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  ${respond("tab-port")} {
    order: 1;
  }
`;

export default function ProjectCard({ project, index }) {
  const isEven = index % 2 === 0;

  return (
    <DivStyle className="projectCard">
      {isEven ? (
        <>
          <ProjectImageWrapper>
            <ProjectImage src={project.imgSrc} alt={project.imgtitle} />
          </ProjectImageWrapper>
          <DivBox>
            <ProjectTags tags={project.tags} />
            <ProjectTitle title1={project.title1} title2={project.title2} />
            <ProjectDescription description={project.description} />
            <ProjectButtons button={project.button} />
          </DivBox>
        </>
      ) : (
        <>
          <DivBox>
            <ProjectTags tags={project.tags} />
            <ProjectTitle title1={project.title1} title2={project.title2} />
            <ProjectDescription description={project.description} />
            <ProjectButtons button={project.button} />
          </DivBox>
          <ProjectImageWrapper>
            <ProjectImage src={project.imgSrc} alt={project.imgtitle} />
          </ProjectImageWrapper>
        </>
      )}
    </DivStyle>
  );
}
