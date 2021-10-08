import React, { PropsWithChildren } from "react";
import styled from "styled-components";
import Section from "./Section";

type data = {
  url: string;
  model: string;
  rightbutton: boolean;
  subtitle: string;
  link: string;
};

const Data: data[] = [
  {
    url: "./images/model-s.jpg",
    model: "Model S",
    rightbutton: true,
    subtitle: "Order Online for ",
    link: "Touchless Delivery",
  },
  {
    url: "./images/model-y.jpg",
    model: "Model Y",
    rightbutton: true,
    subtitle: "Order Online for ",
    link: "Touchless Delivery",
  },
  {
    url: "./images/model-3.jpg",
    model: "Model 3",
    rightbutton: true,
    subtitle: "Order Online for ",
    link: "Touchless Delivery",
  },
  {
    url: "./images/model-x.jpg",
    model: "Model X",
    rightbutton: true,
    subtitle: "Order Online for ",
    link: "Touchless Delivery",
  },
  {
    url: "./images/solar-panels.jpg",
    model: "Solar Panels",
    rightbutton: true,
    subtitle: "Order Online for ",
    link: "Touchless Delivery",
  },
  {
    url: "./images/solar-roof.jpg",
    model: "Solar Roof",
    rightbutton: true,
    subtitle: "Order Online for ",
    link: "Touchless Delivery",
  },
  {
    url: "./images/accessories.jpg",
    model: "Accessories",
    rightbutton: false,
    subtitle: "Order Online for ",
    link: "Touchless Delivery",
  },
];

const Home: React.FunctionComponent = () => {
  return (
    <Container>
      {Data.map((item, index) => (
        <Section
          key={index}
          title={item.model}
          url={item.url}
          rightbutton={item.rightbutton}
          subtitle={item.subtitle}
          link={item.link}
        />
      ))}
    </Container>
  );
};
export default Home;

const Container = styled.div`
  width: 100vw;
  height: 100%;
  scroll-behaviour: smooth;
`;
