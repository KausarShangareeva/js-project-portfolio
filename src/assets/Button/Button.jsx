import styled from "styled-components";
import { buttonData } from "./ButtonData.js";

const BlackButtonStyle = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #000;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  max-width: 300px;
  padding: 15px 25px;
  border-radius: 16px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background-color: #333;
  }
`;

export function BlackButton({ type, href }) {
  const data = buttonData[type];
  if (!data) return null;
  const Icon = data.icon;

  return (
    <BlackButtonStyle href={href} target="_blank" rel="noopener noreferrer">
      {Icon && <Icon width={24} height={24} style={{ color: "#fff" }} />}
      {data.name}
    </BlackButtonStyle>
  );
}
