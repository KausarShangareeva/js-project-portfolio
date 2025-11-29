import styled from "styled-components";

const DateStyle = styled.span`
  display: inline-block;
  width: fit-content;
  padding: 6px 13px;
  font-weight: bold;
  font-size: 18px;
  background: rgba(255, 255, 255, 0.39);
  border-radius: 10px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.014);
  backdrop-filter: blur(10.8px);
  -webkit-backdrop-filter: blur(10.8px);
  border: 1px solid rgba(255, 255, 255, 1);
  color: #000;
  border: 2px solid #000;
`;

export default function BlogDate({ date }) {
  return <DateStyle>{date}</DateStyle>;
}
