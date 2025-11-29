import styled from "styled-components";
import { tagsData } from "./TagData.js";

const TagStyle = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 6px 13px;
  font-weight: bold;
  font-size: 18px;
  background: rgba(255, 255, 255, 0.39);
  border-radius: 10px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10.8px);
  -webkit-backdrop-filter: blur(10.8px);
  border: 1px solid rgba(255, 255, 255, 1);
  color: #000;
  cursor: pointer;
  transition: all 0.5s;
  border: 2px solid transparent;

  &:hover {
    border-color: ${(props) => props.$color || "#000"};
  }
`;

export function Tag({ tagName }) {
  const tag = tagsData[tagName];
  const displayName = tag ? tag.name : tagName;
  const color = tag ? tag.color : "#eee";
  const Icon = tag?.icon;

  return (
    <TagStyle $color={color}>
      {Icon && <Icon width={24} height={24} />}
      {displayName}
    </TagStyle>
  );
}
