import React from "react";
import { Container, Header } from 'semantic-ui-react'
import { Image } from 'semantic-ui-react'
import styles from "./home.module.scss"

const Home = (props) => {
  return (
    <div id="home" className = {styles.customImageHome}>
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' alt = "Image not found" 
        fluid 
        />
      <Container textAlign="center">
        <Header as= "h1" className = {styles.customHeaderHome}>
        WE PROVIDE HIGH-QUALITY CNC MACHINED PARTS TO ASSIST YOU IN ACHIEVING
        YOUR GOALS
        </Header>
      </Container>
    </div>
  );
};
export default Home;
