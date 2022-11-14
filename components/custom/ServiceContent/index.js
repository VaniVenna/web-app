import React from "react";
import { Container, Header, List } from "semantic-ui-react";

const ServiceContent = () => (
  <Container id="services">
    <div>
      <Header as="h2">Our approach is very simple.</Header>
      <List bulleted>
        <List.Item>
          Straight talk about what we can do and when we can do it.
        </List.Item>
        <List.Item>
          Focusing on coordinating a clients priorities and fulfilling their
          needs.
        </List.Item>
        <List.Item>
          Our customers requirements drive every aspect of our business
        </List.Item>
      </List>
    </div>
    <div>
      <Header as="h2">
        When you work with CNC Machinist as your preferred component supplier,
        you will get the following production and efficiency benefits:
      </Header>
      <List bulleted>
        <List.Item>Competitive pricing</List.Item>
        <List.Item>Precision components</List.Item>
        <List.Item>Fine tolerances and accuracy</List.Item>
        <List.Item>Quality workmanship with Repeatability</List.Item>
      </List>
    </div>
    <div>
      <Header as="h2">We Engage as one of your most valuable resources.</Header>
      <List>
        <List.Item>
          ur services have been sort out generally by word of mouth due to our
          commitment to continuous improvement approach with a positive outlook.
        </List.Item>
        <List.Item>
          A team of highly skilled master tradesmen with years of industry
          experience from defence, automotive, construction/earth moving machine
          building, toolmaking, CAD & CAM design at your disposal.
        </List.Item>
      </List>
    </div>
  </Container>
);

export default ServiceContent;
