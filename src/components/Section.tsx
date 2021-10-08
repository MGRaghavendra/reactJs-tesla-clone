import React, { PropsWithChildren } from "react";
import styled from "styled-components";
type props = {
  title: string;
  url: string;
  rightbutton: boolean;
  subtitle: string;
  link: string;
};
type image = {
  url: string;
};
const Section: React.FC<PropsWithChildren<props>> = ({
  title,
  url,
  rightbutton,
  subtitle,
  link,
}) => {
  return (
    <Container url={url}>
      <Description>
        <Title>{title}</Title>
        <Subtitle>
          {subtitle}
          <a href="#1234">{link}</a>
        </Subtitle>
      </Description>
      <BottomWrapper>
        <Buttons>
          <ButtonLeft>custom order</ButtonLeft>
          {rightbutton && <ButtonRight>existing inventory</ButtonRight>}
        </Buttons>
        <Arrow>
          <img src="./images/Arrow-down.png" alt="" />
        </Arrow>
      </BottomWrapper>
    </Container>
  );
};
export default Section;

const Container = styled.div<image>`
  width: 100vw;
  background-image: ${(props) => `url(${props.url})`};
  backgroud-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 80px;
`;

const Title = styled.p`
  font-size: 45px;
  font-weight: 600;
  color: #393c41;
  margin-top: 200px;
`;

const Subtitle = styled.p`
  color: #5c5d61;
  font-size: 16px;
  letter-spacing: 0.2px;
  a {
    color: #5c5d61;
    text-transform: capitalize;
  }
`;

const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 35px;
`;
const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`;
const ButtonLeft = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #171a20cc;
  text-align: center;
  color: #fff;
  text-transform: Uppercase;
  font-weight: 500;
  font-size: 14px;
  padding: 8px 60px;
  border-radius: 25px;
  letter-spacing: 0.5px;
  margin-right: 10px;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    margin-bottom: 10px;
    margin-left: 15px;
  }
`;
const ButtonRight = styled.a`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  text-align: center;
  padding: 8px 50px;
  background-color: #ffffffa6;
  color: #000;
  text-transform: Uppercase;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 0.5px;
  margin-left: 10px;
`;
const Arrow = styled.div`
  margin-top: 35px;
  img {
    height: 30px;
    width: 50px;
    color: #393c41;
    margin-right: 10px;
    animation: bounce2 2s ease infinite;
    @keyframes bounce2 {
      0%,
      20%,
      50%,
      80%,
      100% {
        transform: translateY(0);
      }
      40% {
        transform: translateY(-10px);
      }
      60% {
        transform: translateY(-15px);
      }
      @media screen and (max-width: 768px) {
        margin-left: 15px;
      }
    }
  }
`;
//#171A20CC
//#FFFFFFA6
