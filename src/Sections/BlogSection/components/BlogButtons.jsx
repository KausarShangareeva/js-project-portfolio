import { BlackButton } from "../../../assets/Button/Button";
import styled from "styled-components";

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export default function BlogButtons({ button }) {
  return (
    <ButtonBox>
      {button &&
        button.map((btn) => <BlackButton type={btn.name} href={btn.link} />)}
    </ButtonBox>
  );
}
