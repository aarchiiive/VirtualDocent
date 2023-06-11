import { React } from "react";
import { BackButton, Container, MenuTypo, Root } from "./styled";

const ButtonHeader = ({ setOpenMenu }) => {

  const onClickOpenMenuButton = () => {
    setOpenMenu(true);
  }
  return (
    <Root>
      <Container>
        <BackButton />
        <MenuTypo onClick={onClickOpenMenuButton}>모드 선택</MenuTypo>
      </Container>
    </Root>
  );
}

export default ButtonHeader;
