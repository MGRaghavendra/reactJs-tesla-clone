import React, { PropsWithChildren } from "react";
import styled from "styled-components";

// type props = {
//   isBlur: blur_function;
// };

const Header: React.FC = () => {
  const [menu, showMenu] = React.useState<boolean>(false);
  const models: string[] = [
    "Model S",
    "Model 3",
    "Model X",
    "Model Y",
    "Solar Roof",
    "Solar Panels",
  ];
  return (
    <Container>
      <img src="./images/tesla-logo.png" alt="" />
      <Menu>
        {models.map((model, index) => (
          <span key={index}>{model}</span>
        ))}
      </Menu>
      <RightMenu>
        <span>Shop</span>
        <span>Account</span>
        <span
          onClick={() => {
            showMenu(true);
          }}
        >
          Menu
        </span>
      </RightMenu>
      <RightSideBar show={menu}>
        <CloseButton onClick={() => showMenu(false)}>
          <img src="./images/close.png" alt="" />
        </CloseButton>
        <span>Existing Inventory</span>
        <span>Used Inventory</span>
        <span>Trade-In</span>
        <span>Test Drive</span>
        <span>Cybertruck</span>
        <span>Roadster</span>
        <span>Semi</span>
        <span>Charging</span>
        <span>Powerwall</span>
        <span>Commercial Energy</span>
      </RightSideBar>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  aligin-items: center;
  padding: 15px 10px;
  img {
    height: 20px;
    width: 90px;
  }
`;

const Menu = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: no-wrap;
  span {
    color: #181b21;
    font-weight: 500;
    margin-left: 10px;
    margin-right: 10px;
    font-size: 16px;
    letter-spacing: 0.5px;
  }
  @media screen and (max-width: 950px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    color: #181b21;
    font-weight: 500;
    margin-left: 15px;
    margin-right: 15px;
    letter-spacing: 0.5px;
    font-size: 16px;
  }
`;

const RightSideBar = styled.div<{ show: boolean }>`
  padding: 15px;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 320px;
  background-color: #ffffff;
  transition: 0.3s linear;
  transform: ${(props) => (props.show ? "translateX(0%)" : "translateX(100%)")};
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    color: #393c41;
    text-align: left;
    width: 100%;
    padding: 0px 5px;
    font-weight: 500;
    letter-spacing: 0.5px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    margin-bottom: 20px;
  }
`;

const CloseButton = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
  width: 100%;
  img {
    height: 20px;
    width: 20px;
  }
`;

export default Header;
