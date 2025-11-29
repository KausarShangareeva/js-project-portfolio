import styled from "styled-components";
import { Tag } from "../../../assets/Tag/TagComponent";

const DivFlex = styled.span`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export function SkillsTagList({ tags }) {
  if (!tags) return console.log("something wrong");

  return (
    <DivFlex>
      {tags.map((tag) => (
        <Tag key={tag} tagName={tag} />
      ))}
    </DivFlex>
  );
}
