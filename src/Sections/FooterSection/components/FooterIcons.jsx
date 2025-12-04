import { FooterIcons } from "../../../assets/Icon/IconData";
import styled from "styled-components";

const DivStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export function FooterIconList() {
  return (
    <span>
      {FooterIcons &&
        FooterIcons.map((item, i) => (
          <a
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            style={{ marginRight: "10px" }}
          >
            <item.icon width={24} height={24} />
          </a>
        ))}
    </span>
  );
}
