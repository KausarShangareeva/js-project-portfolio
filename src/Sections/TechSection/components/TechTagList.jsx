import styled from "styled-components";
import { Tag } from "../../../assets/Tag/TagComponent";

const DivFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export function TechTagList({ tags }) {
  if (!tags) return console.log("something wrong");

  return (
    <DivFlex>
      {tags.map((tag) => (
        <Tag key={tag} tagName={tag} />
      ))}
    </DivFlex>
  );
}
